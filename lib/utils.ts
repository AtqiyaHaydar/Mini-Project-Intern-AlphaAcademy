import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const MAX_WORDS_DESCRIPTION = 15;
export const truncateDescription = (description: string) => {
  // Menghapus tag HTML untuk menghitung hanya teks
  const plainText = description.replace(/<[^>]*>/g, '');

  // Memecah teks menjadi array kata
  const words = plainText.split(/\s+/);

  // Memastikan panjang teks tidak melebihi batas maksimum
  if (words.length > MAX_WORDS_DESCRIPTION) {
    const truncatedWords = words.slice(0, MAX_WORDS_DESCRIPTION);
    return truncatedWords.join(' ') + '...';
  }

  return plainText
};

const MAX_WORDS_TITLE = 5;
export const truncateTitle = (description: string) => {
  // Menghapus tag HTML untuk menghitung hanya teks
  const plainText = description.replace(/<[^>]*>/g, '');

  // Memecah teks menjadi array kata
  const words = plainText.split(/\s+/);

  // Memastikan panjang teks tidak melebihi batas maksimum
  if (words.length > MAX_WORDS_TITLE) {
    const truncatedWords = words.slice(0, MAX_WORDS_TITLE);
    return truncatedWords.join(' ') + '...';
  }

  return plainText
};

const MAX_WORDS_AUTHOR = 5
export const truncateAuthor = (description: string) => {
  // Menghapus tag HTML untuk menghitung hanya teks
  const plainText = description.replace(/<[^>]*>/g, '');

  // Memecah teks menjadi array kata
  const words = plainText.split(/\s+/);

  // Memastikan panjang teks tidak melebihi batas maksimum
  if (words.length > MAX_WORDS_AUTHOR) {
    const truncatedWords = words.slice(0, MAX_WORDS_AUTHOR);
    return truncatedWords.join(' ') + '...';
  }

  return plainText
};