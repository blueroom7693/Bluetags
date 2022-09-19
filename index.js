import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
function main() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

registerRootComponent(main);
