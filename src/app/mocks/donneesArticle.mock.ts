export interface IDonnesArticle {
  id: number;
  pays: string;
  ville: string;
  date_depart: string;
  date_retour: string;
  image_principal: string;
  images_secondaire: string[];
  text_voyage: string;
  points_positifs: string[];
  points_negatif: string[];
  conseil: string[];
  text_resume: string;
  isActive: boolean;
}
export const ARTICLES: IDonnesArticle[] = [
  {
    id: 1,
    pays: 'Albanie',
    ville: 'Tirana',
    date_depart: '14-4-22',
    date_retour: '17-5-22',
    image_principal: '../../assets/images/Albanie-Tirana.png',
    images_secondaire: [
      '../../assets/images/Albanie-Tirana.png',
      '../../assets/images/Albanie-Tirana.png',
      '../../assets/images/Albanie-Tirana.png',
      '../../assets/images/Albanie-Tirana.png',
      '../../assets/images/Albanie-Tirana.png',
    ],
    text_voyage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    points_positifs: [
      'Un pays très simple à sillonner, sans embrouilles ni complexité',
      'Des habitants gentils, spontanés et qui cherchent le contact',
      'Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques',
    ],
    points_negatif: [
      'Le climat torride en juillet-août, sauf en montagne',
      'La côte très fréquentée l’été et de plus en plus bétonnée',
    ],
    conseil: ['Prenez une paire de tong !'],
    text_resume:
      'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isActive: true,
  },
  {
    id: 2,
    pays: 'Grèce',
    ville: 'Athène',
    date_depart: '14-4-22',
    date_retour: '17-5-22',
    image_principal: '../../assets/images/Grèce-Athène.png',
    images_secondaire: [
      '../../assets/images/Grèce-Athène.png',
      '../../assets/images/Grèce-Athène.png',
    ],
    text_voyage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    points_positifs: [
      'Un pays très simple à sillonner, sans embrouilles ni complexité',
      'Des habitants gentils, spontanés et qui cherchent le contact',
      'Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques',
    ],
    points_negatif: [
      'Le climat torride en juillet-août, sauf en montagne',
      'La côte très fréquentée l’été et de plus en plus bétonnée',
    ],
    conseil: ['Prenez une paire de tong !'],
    text_resume:
      'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isActive: true,
  },
  {
    id: 3,
    pays: 'Guatemala',
    ville: 'Monterrico',
    date_depart: '14-4-22',
    date_retour: '17-5-22',
    image_principal: '../../assets/images/Guatemala-Monterrico.png',
    images_secondaire: [
      '../../assets/images/Guatemala-Monterrico.png',
      '../../assets/images/Guatemala-Monterrico.png',
    ],
    text_voyage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    points_positifs: [
      'Un pays très simple à sillonner, sans embrouilles ni complexité',
      'Des habitants gentils, spontanés et qui cherchent le contact',
      'Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques',
    ],
    points_negatif: [
      'Le climat torride en juillet-août, sauf en montagne',
      'La côte très fréquentée l’été et de plus en plus bétonnée',
    ],
    conseil: ['Prenez une paire de tong !'],
    text_resume:
      'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isActive: false,
  },
  {
    id: 4,
    pays: 'Tunisie',
    ville: 'Tunis',
    date_depart: '14-4-22',
    date_retour: '17-5-22',
    image_principal: '../../assets/images/Tunisie-Tunis.png',
    images_secondaire: [
      '../../assets/images/Tunisie-Tunis.png',
      '../../assets/images/Tunisie-Tunis.png',
    ],
    text_voyage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    points_positifs: [
      'Un pays très simple à sillonner, sans embrouilles ni complexité',
      'Des habitants gentils, spontanés et qui cherchent le contact',
      'Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques',
    ],
    points_negatif: [
      'Le climat torride en juillet-août, sauf en montagne',
      'La côte très fréquentée l’été et de plus en plus bétonnée',
    ],
    conseil: ['Prenez une paire de tong !'],
    text_resume:
      'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isActive: false,
  },
  {
    id: 5,
    pays: 'Tunisie',
    ville: 'El Jem',
    date_depart: '14-4-22',
    date_retour: '17-5-22',
    image_principal: '../../assets/images/Tunisie-El-Jem.png',
    images_secondaire: [
      '../../assets/images/Tunisie-El-Jem.png',
      '../../assets/images/Tunisie-El-Jem.png',
    ],
    text_voyage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.\nDonec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    points_positifs: [
      'Un pays très simple à sillonner, sans embrouilles ni complexité',
      'Des habitants gentils, spontanés et qui cherchent le contact',
      'Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques',
    ],
    points_negatif: [
      'Le climat torride en juillet-août, sauf en montagne',
      'La côte très fréquentée l’été et de plus en plus bétonnée',
    ],
    conseil: ['Prenez une paire de tong !'],
    text_resume:
      'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isActive: false,
  },
];
