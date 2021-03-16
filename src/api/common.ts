import Axios from './axios';
import { HttpResponse } from '@/@types/index';

/**
 * @description 公共模块的的网络请求，所有通用 api 放在此处
 */

class CommonService {
  // 添加
  static getRoleInfoList(): Promise<HttpResponse> {
    return Axios.get('/getRoleInfo', {
      responseType: 'json',
    });
  }

  // 加载OSS资源文件添加
  static downLoadOssFiles(): Promise<HttpResponse> {
    return Axios.post(
      '/getRoleInfo',
      {},
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );
  }
}

export default CommonService;
