export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
//    {
//      title: "Blog Posts",
//      htmlBefore: '<i class="material-icons">vertical_split</i>',
//      to: "/blog-posts",
//    },
    {
      title: "Add New User",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-user",
    },
    {
      title: "Add New Product",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-product",
    },
    {
      title: "Users Management",
      htmlBefore: '<i class="material-icons">supervisor_account</i>',
      to: "/tables-users",
    },
    {
      title: "Products Management",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables-products",
    },
//    {
//      title: "User Profile",
//      htmlBefore: '<i class="material-icons">person</i>',
//      to: "/user-profile-lite",
//    },
//    {
//      title: "Errors",
//      htmlBefore: '<i class="material-icons">error</i>',
//      to: "/errors",
//    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
  ];
}
