---
title: "(6) React - Class Components"
categories: [front-end, reactjs]
tags: [react, front]
comment: true
---
## ES6 class
properties -> ES6 clas -> html(jsx)


### src/components/Welcome.js
```
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello Class Component!</h1>;
  }
}
export default Welcome;
```

### App.js 
import하고 custom tag 추가
```
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}
export default App;
```

---

## functional component VS class component
| functional | class |
| :---: | :---: |
| simple functions | more feature rich |
| absense of 'this' keyword | maintain their own private data - state |
| solution without using state | complex UI logic |
| mainly responsible for the UI | provide lifescycle hooks |
| statelss/ dumb/ presentational |stateful/smart/ container|




---

출처 : [https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw](https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw)
