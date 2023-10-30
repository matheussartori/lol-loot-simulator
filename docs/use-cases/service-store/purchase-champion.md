# Purchase champion

## Steps

### 1
- The service store validates if the champion exists.
  - If the champion does not exists, return a http error.
- If the champion exists, creates a transaction with the status `PENDING`.
- Creates the message on the topic `purchase.created`.

### 2
- The service inventory listen to the topic `purchase.created`.
  - If the user already own the champion, emit the message on the topic `purchase.failed`.
- If the user does not own the champion, emit the message on the topic `purchase.validated.inventory`.

### 3
- The service account listen to the topic `purchase.validated.inventory`.
  - The service account checks if the user has balance to complete the transaction.
  - If the user has balance:
    - The service account updates the transaction with the status `VALIDATED_INVENTORY`.
    - The service account emits the message on the topic `purchase.validated.balance`.
  - If the user does not have balance:
    - The service account updates the transaction with the status `FAILED`.
- The service account listen to the topic `purchase.failed`.
  - The service account updates the transaction with the status `FAILED`.

### 4
- The service inventory listen to the topic `purchase.validated.balance`.
  - The service inventory adds the champion to the user inventory.
  - If the champion is added successfully, emit the message `purchase.completed`.
  - If the champion is not added successfully, emit the message `purchase.refund`.

### 5
- The service account listen to the topic `purchase.refund`.
  - The service account updates the transaction with the status `REFUND`.
  - The service account refunds the balance to the user account.