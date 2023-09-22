graph TD
  A[User] -->|1. Interacts with the SPA| B[SPA]
  B -->|2. Types Note| B1[SPA]
  B1 -->|3. Clicks Save| B2[SPA]
  B2 -->|4. Sends POST request| S[Server]
  S -->|5. Receives and processes request| S1[Server]
  S1 -->|6. Saves the new note| S2[Server]
  S2 -->|7. Responds with success| B3[SPA]
  B3 -->|8. Updates the SPA UI| A
