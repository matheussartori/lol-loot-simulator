# Purchase champion

## Steps

### 1
- The store service validates if the champion exists.
  - If the champion does not exists, return a http error.
- If the champion exists, creates a transaction with the status `PENDING`.
- Creates the message on the topic `purchase.created`.

### 2
- The inventory service listen to the topic `purchase.created`.
  - If the user already own the champion, emit the message on the topic `purchase.failed.owned`.
  - If the user does not own the champion, emit the message on the topic `purchase.validated.inventory`.

### 3
- The store service listen to the topic `purchase.validated.inventory`.
  - The store service updates the transaction with the status `VALIDATED_INVENTORY`.
  - The store service checks if the user has balance to complete the transaction.
  - If the user has balance:
    - The store service updates the transaction with the status `VALIDATED_BALANCE`.
    - The store service emits the message `purchase.validated.balance`.
  - If the user does not have balance:
    - The store service updates the transaction with the status `FAILED_BALANCE`.
- The store service listen to the topic `purchase.failed.owned`.
  - The store service updates the transaction with the status `FAILED_OWNED`.

### 4
- The inventory service listen to the topic `purchase.validated.balance`.
  - The inventory service adds the champion to the user inventory.
  - If the champion is added successfully, emit the message `purchase.completed`.
  - If the champion is not added successfully, emit the message `purchase.refund`.

### 5
- The store service listen to the topic `purchase.refund`.
  - The store service refunds the balance to the user store.
  - The store service updates the transaction with the status `REFUNDED`.
- The store service listen to the topic `purchase.completed`.
  - The store service updates the transaction with the status `COMPLETED`.