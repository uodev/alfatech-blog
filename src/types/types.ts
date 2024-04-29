export interface Route {
  path: string;
  name: string;
}

export interface IBlogs {
  blogTitle: string;
  blogSlug: string;
  blogContent: string;
  blogImage: string;
  author: {
    authorFullName: string;
    authorAvatar: string;
    authorSlug: string;
  };
  category: {
    categoryName: string;
  };
}

export interface IResponse {
  message: string;
  isSuccess: boolean;
  data: any;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export interface IBlog {
  blogTitle: string;
  blogSlug: string;
  blogContent: string;
  blogImage: string;
  author: {
    authorFullName: string;
    authorAvatar: string;
    authorSlug: string;
  };
  category: {
    categoryName: string;
  };
  view: number;
}
