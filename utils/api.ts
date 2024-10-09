// utils/api.ts
export const fetchData = async <T,>(endpoint: string): Promise<T> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  