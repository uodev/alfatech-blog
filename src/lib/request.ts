const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

const request = async (url: string, options: RequestInit = {}): Promise<Response> => {
    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache",
    });
    return response;
};

export default request;