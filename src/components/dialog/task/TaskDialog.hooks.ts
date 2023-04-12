import IUserData from 'src/types/user.type';
import * as Yup from 'yup';
export const FORM_VALIDATION = Yup.object().shape({
  site_name: Yup.string().required('Champ obligatoire'),
  reference: Yup.string().required('Champ obligatoire'),
  operateur: Yup.string().required('Champ obligatoire'),
  adress: Yup.string().required('Champ obligatoire'),
  contact_client: Yup.string().required('Champ obligatoire'),
  chambre: Yup.string().required('Champ obligatoire'),
  bpe: Yup.string().required('Champ obligatoire'),
  add_info: Yup.string().required('Champ obligatoire'),
  devis_av: Yup.boolean().required('Champ obligatoire'),
  four_fo: Yup.boolean().required('Champ obligatoire'),
  thirty_fo: Yup.boolean().required('Champ obligatoire'),
  site_raccord: Yup.boolean().required('Champ obligatoire'),
});
export const INITIAL_FORM_STATE = {
  site_name: '',
  reference: '',
  operateur: '',
  adress: '',
  contact_client: '',
  chambre: '',
  bpe: '',
  add_info: '',
  devis_av: false,
  four_fo: false,
  thirty_fo: false,
  site_raccord: false,
};
export interface optionItem {
  id: number;
  title: string;
  master: boolean;
}
export async function organiseData(array: IUserData[]) {
  let arr: optionItem[] = [];
  let i: number = 0;

  await array.map((user) => {
    i++;
    arr.push({
      id: i,
      title: user.login,
      master: false,
    });
  });

  return arr;
}
export async function returnOnlyTitles(array: IUserData[]) {
  let arr: string[] = [];

  await array.map((user) => {
    arr.push(user.email);
  });

  return arr;
}
