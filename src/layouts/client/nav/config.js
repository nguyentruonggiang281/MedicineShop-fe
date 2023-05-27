// component
// import SvgColor from '../../../components/svg-color';

// // ----------------------------------------------------------------------

// const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  // {
  //   title: 'THỰC PHẨM CHỨC NĂNG',
  //   path: '/'
  // },
  // {
  //   title: 'DƯỢC MỸ PHẨM',
  //   path: '/'
  // },
  // {
  //   title: 'CHĂM SÓC CÁ NHÂN',
  //   path: '/',
  // },
  // {
  //   title: 'THUỐC',
  //   path: '/',
  // },
  // {
  //   title: 'THIẾT BỊ Y TẾ',
  //   path: '/',
  // },
  // {
  //   title: 'BỆNH',
  //   path: '/',
  // },
  // {
  //   title: 'GÓC SỨC KHỎE',
  //   path: '/blog',
  // },
  // {
  //   title: 'HỆ THỐNG NHÀ THUỐC',
  //   path: '/',
  // },
  {
    title: 'Menu 1',
    path: '/menu1',
    // info: 'Information for Menu 1',
    children: [
      {
        title: 'Submenu 1.1',
        path: '/menu1/submenu1',
        // info: 'Information for Submenu 1.1',
        children: [
          {
            title: 'Submenu 1.1.1',
            path: '/menu1/submenu1/submenu1',
            // info: 'Information for Submenu 1.1.1',
          },
          {
            title: 'Submenu 1.1.2',
            path: '/menu1/submenu1/submenu2',
            // info: 'Information for Submenu 1.1.2',
          },
        ],
      },
      {
        title: 'Submenu 1.2',
        path: '/menu1/submenu2',
        // info: 'Information for Submenu 1.2',
        children: [
          {
            title: 'Submenu 1.2.1',
            path: '/menu1/submenu2/submenu1',
            // info: 'Information for Submenu 1.2.1',
          },
          {
            title: 'Submenu 1.2.2',
            path: '/menu1/submenu2/submenu2',
            // info: 'Information for Submenu 1.2.2',
          },
        ],
      },
    ],
  },
  {
    title: 'Menu 2',
    path: '/menu2',
    // info: 'Information for Menu 2',
  },
  {
    title: 'Menu 3',
    path: '/menu3',
    // info: 'Information for Menu 3',
    children: [
      {
        title: 'Submenu 3.1',
        path: '/menu3/submenu1',
        // info: 'Information for Submenu 3.1',
      },
      {
        title: 'Submenu 3.2',
        path: '/menu3/submenu2',
        // info: 'Information for Submenu 3.2',
      children : [
        {
          title: 'Submenu 3.1',
          path: '/menu3/submenu1',
          // info: 'Information for Submenu 3.1',
        },
        {
          title: 'Submenu 3.2',
          path: '/menu3/submenu2',
          // info: 'Information for Submenu 3.2',
        },
      ]
    },
    ],
  },
];

export default navConfig;
