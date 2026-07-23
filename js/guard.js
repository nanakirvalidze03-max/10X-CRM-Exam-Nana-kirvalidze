// ვამოწმებთ, არის თუ არა მომხმარებელი შესული სისტემაში
const session = localStorage.getItem('crm_session');
// ვიგებთ, რა გვერდზე დგას ამჟამად მომხმარებელი
const currentPage = window.location.pathname;

if (!session) {
    // თუ სესია არ არსებობს და მომხმარებელი ცდილობს შევიდეს კლიენტების გვერდზე
    if (currentPage.includes('clients.html')) {
        window.location.href = 'index.html';
    }
} else {
    // თუ სესია უკვე არსებობს და მომხმარებელი არის ლოგინის ან რეგისტრაციის გვერდზე
    if (currentPage.includes('index.html') || currentPage.includes('signup.html') || currentPage.endsWith('/')) {
        window.location.href = 'clients.html';
    }
}