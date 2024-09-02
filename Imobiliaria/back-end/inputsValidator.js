class InputValidator {

    stringValidator(string, min, max) {
        try {
            const regex = new RegExp(`^[a-zA-ZÀ-ÿ\\s']{${min},${max}}$`);
            if (regex.test(string)) {
            } else {
                throw new Error('Por favor, digite um nome válido.')
            };

            return true;

        } catch (error) {
            return error.message
        }
    }

    integerMaxValidator(number, max) {
        try {
            if (Number.isInteger(number) && number > 0 && number <= max) {
                return true;
            } else {
                throw new Error(`Valor inválido. Digite um número inteiro entre 1 e ${max}.`);
            }
        } catch (error) {
            return error.message;
        }
    }

    integerValidator(number) {
        try {
            if (Number.isInteger(number) && number > 0) {
            } else {
                throw new Error("Valor inválido, digite somente números e pelo menos 1 caractere.");
            }

            return true;

        } catch (error) {
            return error.message
        }
    }

    floatMaxValidator(number, max) {
        try {
            if (typeof number === 'number' && !isNaN(number) && number > 0 && number <= max) {
                return true;
            } else {
                throw new Error(`Valor inválido. Digite um número entre 0 e ${max}.`);
            }
        } catch (error) {
            return error.message;
        }
    }

    floatValidator(number) {
        try {
            if (typeof number === 'number' && !isNaN(number) && number > 0) {
                return true;
            } else {
                throw new Error(`Valor inválido. Digite um número maior que 0.`);
            }
        } catch (error) {
            return error.message;
        }
    }

    cpfValidator(cpf) {
        try {
            cpf = cpf.replace(/[^\d]/g, ''); // Remove todos os caracteres que não são dígitos

            if (cpf.length !== 11) {
                throw new Error("Por favor, digite 11 números.");
            }

            // Elimina CPFs inválidos conhecidos
            if (/^(.)\1{10}$/.test(cpf)) {
                throw new Error("CPF inválido.");
            }

            let sum;
            let remainder;

            sum = 0;
            for (let i = 1; i <= 9; i++) {
                sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }
            remainder = (sum * 10) % 11;

            if ((remainder === 10) || (remainder === 11)) {
                remainder = 0;
            }
            if (remainder !== parseInt(cpf.substring(9, 10))) {
                throw new Error("CPF inválido.");
            }

            sum = 0;
            for (let i = 1; i <= 10; i++) {
                sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }
            remainder = (sum * 10) % 11;

            if ((remainder === 10) || (remainder === 11)) {
                remainder = 0;
            }
            if (remainder !== parseInt(cpf.substring(10, 11))) {
                throw new Error("CPF inválido.");
            }

            return true;

        } catch (error) {
            return error.message
        }
    }

    cnpjValidator(cnpj) {
        try {
            cnpj = cnpj.replace(/[^\d]/g, ''); // Remove todos os caracteres que não são dígitos

            if (cnpj.length !== 14) {
                throw new Error("Por favor, digite 14 números.");
            }

            // Elimina CNPJs inválidos conhecidos
            if (/^(.)\1{13}$/.test(cnpj)) {
                throw new Error("CNPJ inválido.");
            }

            let length = cnpj.length - 2;
            let numbers = cnpj.substring(0, length);
            let digits = cnpj.substring(length);
            let sum = 0;
            let pos = length - 7;

            for (let i = length; i >= 1; i--) {
                sum += numbers.charAt(length - i) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result != digits.charAt(0)) {
                throw new Error("CNPJ inválido.");
            }

            length = length + 1;
            numbers = cnpj.substring(0, length);
            sum = 0;
            pos = length - 7;

            for (let i = length; i >= 1; i--) {
                sum += numbers.charAt(length - i) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result != digits.charAt(1)) {
                throw new Error("CNPJ inválido.");
            }

            return true;

        } catch (error) {
            return error.message
        }

    }

    zipCodeValidator(zipCode) {
        try {
            // Remove todos os caracteres que não são dígitos
            zipCode = zipCode.replace(/[^\d]/g, '');

            if (!/^\d{8}$/.test(zipCode)) {
                throw new Error("CEP inválido.");
            }

            return true;
        } catch (error) {
            return error.message;
        }
    }

    emailValidator(email) {
        try {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                return true;
            } else {
                throw new Error("Email inválido.");
            }
        } catch (error) {
            return error.message;
        }
    }

    phoneValidator(phone) {
        try {
            // Remove todos os caracteres que não são dígitos
            phone = phone.replace(/[^\d]/g, '');

            // Verifica se o número de telefone tem entre 10 e 11 dígitos (Brasil)
            if (/^\d{10,11}$/.test(phone)) {
                return true;
            } else {
                throw new Error("Número de telefone inválido. Deve conter entre 10 e 11 dígitos.");
            }
        } catch (error) {
            return error.message;
        }
    }

    dateValidator(date) {
        try {
            if (/^\d{4}-\d{2}-\d{2}$/.test(date) && !isNaN(Date.parse(date))) {
                return true;
            } else {
                throw new Error("Data inválida. Formato esperado: YYYY-MM-DD.");
            }
        } catch (error) {
            return error.message;
        }
    }

    userNameValidator(userName, min, max) {
        try {
            const regex = new RegExp(`^[a-zA-Z0-9]{${min},${max}}$`);
            if (regex.test(userName)) {
                return true;
            } else {
                throw new Error(`Por favor, digite um nome de usuário válido (entre ${min} e ${max} caracteres, apenas letras e números).`);
            }
        } catch (error) {
            return error.message;
        }
    }

    passwordValidator(password, minLength = 8) {
        try {
            if (password.length >= minLength && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password)) {
                return true;
            } else {
                throw new Error(`Senha inválida. Deve conter pelo menos ${minLength} caracteres, incluindo letras maiúsculas e minúsculas, números e caracteres especiais.`);
            }
        } catch (error) {
            return error.message;
        }
    }

}

module.exports = new InputValidator();
