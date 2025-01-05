import argon2 from 'argon2';

(async () => {
    try {
        const hash = await argon2.hash('testpassword');
        console.log('Password hash:', hash);
    } catch (error) {
        console.error('argon2 error:', error);
    }
})();
