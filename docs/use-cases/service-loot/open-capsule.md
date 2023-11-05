# Open Capsule

## Steps

### 1
- The loot service validates if the user has the specific item.
  - If the user does not have the item, the service returns an error.
- If the item requires a key to be opened, the loot service validate if the user has a key.
  - If the user does not have the key, the service returns an error.
  - If the user have the key, deduct one key from the user.

### 2
- The loot service runs the algorithm to get one item or more from the capsule.
  - If the item is a key, the loot service adds one key to the user.
  - If the item is a chest, the loot service adds one chest to the user.
  - If the item is a champion, skin or chroma, it emits the message on the topic `inventory.item.added`.

### 3
- The inventory service listens to the topic `inventory.item.added` and adds the item to the user inventory.

### 4
- The returned items are returned to the infrastructure layer as an array.