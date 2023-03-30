import IJobData from 'src/types/job.type';
import IUserData, { IUserMimalData } from 'src/types/user.type';
import axiosInstance from '../api';
class BackofficeService {
  private readonly urlPrefix = '/back-office';
  private readonly urlPrefixUser = '/users';

  fetchAllUsers() {
    return axiosInstance.get<IUserData[]>(`${this.urlPrefix}`);
  }
  fetchAllJobs() {
    return axiosInstance.get<IUserData[]>(`${this.urlPrefix}/jobs`);
  }
  createUser(data: IUserMimalData) {
    return axiosInstance.post<IUserMimalData>(`${this.urlPrefixUser}`, {
      data,
    });
  }
  createJob(data: IJobData) {
    return axiosInstance.post<IUserMimalData>(`${this.urlPrefixUser}`, {
      data,
    });
  }
}
export default new BackofficeService();
