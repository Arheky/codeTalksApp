export default function authErrorMessageParser(errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Geçersiz e-posta adresi';
        case 'auth/invalid-password':
            return 'Şifreniz geçersiz'
        case 'auth/user-not-found':
            return 'Kullanıcı Bulunamadı'
        case 'auth/email-already-exists':
            return 'Kullanıcı zaten kayıtlı'
        default:
            break;
    }
}