import icons from './icons';

export const walkthrough = [
  {
    id: 0,
    title: 'First Stripe Earned',
    sub_title: 'Top 10% of highest spending players in a month',
    // image: require("../../assets/images/rising_star.png")
  },
  {
    id: 1,
    title: 'Born Winner',
    sub_title: 'Top 10% of highest spending players in a month',
    // image: require("../../assets/images/rising_star.png")
  },
];

const apiData = [
  {
    id: 1,
    title: 'Cleaning',
    subtitle: 'Lorem Ipsum is simply dummy text of their printing ',
    //url for image
    image:
      'https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
  },
  {
    id: 2,
    title: 'Carpet Cleaning',
    subtitle: 'Lorem Ipsum is simply dummy text of their printing ',

    image:
      'https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7',
  },
  {
    id: 3,
    title: 'Carpet Cleaning',
    subtitle: 'Lorem Ipsum is simply dummy text of their printing ',

    image:
      'https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7',
  },
  {
    id: 4,
    title: 'Carpet Cleaning',
    subtitle: 'Lorem Ipsum is simply dummy text of their printing ',

    image:
      'https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7',
  },
  {
    id: 5,
    title: 'Carpet Cleaning',

    subtitle: 'Lorem Ipsum is simply dummy text of their printing ',

    image:
      'https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7',
  },
];
const apiData2 = [
  {
    id: 1,
    title: 'Cleaning',
    date: '13 May Wed ',
    time: '12:00 AM',
    image:
      'https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    key:'1'
  },
  {
    id: 2,
    title: 'Carpet Cleaning',
    date: '13 May Wed ',
    time: '12:00 AM',
    image:
      'https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7',
    key:'0'

  },
  {
    id: 3,
    title: 'Painting Service',
    date: '13 May Wed ',
    time: '12:00 AM',
    image:
      'https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7',
    key:'1'

  },
  {
    id: 4,
    title: 'Carpet Cleaning',
    date: '13 May Wed ',
    time: '12:00 AM',
    image:
      'https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7',
    key:'0'

  },
  {
    id: 5,
    title: 'Resurface Service',
    date: '13 May Wed ',
    time: '12:00 AM',
    image:
      'https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7',
    key:'0'

  },
];

const screens = {
  home: 'Home',
  request_form: 'Request Form',
  profile: 'Profile',
  contact: 'Contact',
};

export const home_strings = {
  todays_games: `Today's Games`,
};

const bottom_tabs = [
  {
    id: 1,
    label: screens.home,
    icon: icons.tab_home,
  },
  {
    id: 2,
    label: screens.request_form,
    icon: icons.tab_request,
  },
  {
    id: 3,
    label: screens.profile,
    icon: icons.tab_profile,
  },
  {
    id: 4,
    label: screens.contact,
    icon: icons.tab_contact,
  },
];

export default {
  // walkthrough,
  screens,
  bottom_tabs,
  // home_strings
  apiData,
  apiData2
};
