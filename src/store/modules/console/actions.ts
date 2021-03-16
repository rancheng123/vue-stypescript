import { HttpListQuery, StateType, HttpResponse } from '@/@types/index';
import { setStoreState } from '../../utils';
import { Store } from 'vuex';
import CommonService from '@/api/common';

/**
 * @description 所有跟控制台相关的内容
 * @return status 返回状态  err_code：1，逻辑正确，err_code：0，发生错误。
 */

const consoleActions = {
  // 获取用户角色列表
  async getRoleList(): Promise<HttpResponse | number> {
    const res = await CommonService.getRoleInfoList();
    if (res.status === 200) {
      const data = res.data.data;
      setStoreState('console', 'roleList', data ? data : []);
      return res;
    }
    return 0;
  },
};

type ConsoleActionsType = keyof typeof consoleActions;

export { ConsoleActionsType };
export default consoleActions;
