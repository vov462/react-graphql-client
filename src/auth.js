const JWT_TOKEN_KEY = "jwtToken";

export function getAccessToken() {
    return localStorage.getItem(JWT_TOKEN_KEY);
}

export async function login(email, password) {
    const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const { token } = await response.json();

        localStorage.setItem(JWT_TOKEN_KEY, token);
    }

    return response.ok;
}

export function isLoggedIn() {
    return !!localStorage.getItem(JWT_TOKEN_KEY);
}

export function logout() {
    localStorage.removeItem(JWT_TOKEN_KEY);
}
