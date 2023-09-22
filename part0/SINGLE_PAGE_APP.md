graph TD
  A[User] -->|1. Accesses the SPA URL| B[Browser]
  B -->|2. Requests the SPA page| S[Server]
  S -->|3. Retrieves the SPA HTML and JavaScript| S1[Server]
  S1 -->|4. Sends HTML and JavaScript to the browser| B1[Browser]
  B1 -->|5. Loads and initializes the SPA| B2[Browser]
  B2 -->|6. Requests data from the server| S2[Server]
  S2 -->|7. Sends JSON data| B3[Browser]
  B3 -->|8. Renders the SPA content| A
