import delPath from "../utils/delpath";
import run from "../utils/run";
import { series, parallel } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
//删除easyest

export const removeDist = () => {
    return delPath(`${pkgPath}/lol-ui`);
};
export const buildComponent = async () => {
    run("pnpm run build", componentPath);
}

export default series(async () => removeDist(),async ()=> buildComponent());
