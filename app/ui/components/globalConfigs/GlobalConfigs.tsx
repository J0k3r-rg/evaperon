import { Switch } from "./switchLang";
import ChangeTheme from "./ChangeTheme";
import './globalConfigs.css';

export default function GlobalConfigs(){
    return (
        <div id="configGlobal">
            <Switch />
            <ChangeTheme />
        </div>
    )
}