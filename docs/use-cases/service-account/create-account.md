# Create Account

## Steps

### 1
- The account service validates if the user exists (same username).
- Emit the message on the topic `user.created`.

### 2
- The store service listen to the topic `user.created`.
- If the user is not yet created, saves the user in the database.