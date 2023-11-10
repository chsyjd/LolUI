import delPath from '../utils/delpath';
import run from '../utils/run';
import { series } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
export const removeDist = () => {
  return delPath(`${pkgPath}/lol-ui`);
};
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  async () => buildComponent()
);
