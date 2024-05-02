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
    fullname: string;
    authorAvatar: string;
    authorSlug: string;
  };
  category: {
    name: string;
  };
}

export interface IResponse {
  message: string;
  statusCode: number;
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
    fullname: string;
    avatar: string;
    authorSlug: string;
  };
  category: {
    name: string;
  };
  blogView: number;
  blogPreface: string;
}
