graph TD
  A[User] -->|1. Types Note| B[Browser]
  B -->|2. Enters content and clicks Save| B1[Browser]
  B1 -->|3. Sends POST request| S[Server]
  S -->|4. Receives and processes request| S1[Server]
  S1 -->|5. Saves the new note| S2[Server]
  S2 -->|6. Responds with success| B2[Browser]
  B2 -->|7. Updates the UI| A
