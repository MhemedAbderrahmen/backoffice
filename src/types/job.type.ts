import IUserData from './user.type';

export default interface IJobData {
  site_name?: string;
  reference?: string;
  operateur?: string;
  adress?: string;
  contact_client?: string;
  site_raccorde?: boolean;
  chambre?: string;
  bpe?: string;
  four_fo?: boolean;
  thirty_fo?: boolean;
  devis_av?: boolean;
  add_info?: string;
  assignedTo?: IUserData[];
}
