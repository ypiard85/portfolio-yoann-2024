import { object, string } from "zod"

export const contactSchemaFr = object({
    name: string({required_error: "Ce champ est requis." })
            .min(1, "Ce champ est requis.")
            .max(20, 'Maximum caractère' + ' 20.')
            ,
    subject: string({required_error: "Ce champ est requis." })
            .min(1, "Ce champ est requis.")
            .max(50,  'Maximum caractère' + ' 50.')
            ,
    email: string({required_error: "Ce champ est requis." })
            .min(1, "Ce champ est requis.")
            .email("Invalide email."),
    phone: string(),
    message: string({required_error: "Ce champ est requis." })
            .min(3, 'Minium caractère' + ' 3.')
            .max(500,  'Maximum caractère' + ' 500.')
})

export const contactSchemaEn = object({
    name: string({required_error: "This field is required."})
            .min(1, "This field is required.")
            .max(20, "Maximum characters" + ' 20.')
            ,
    subject: string({required_error: "This field is required."})
            .min(1, "This field is required.")
            .max(50,  "Maximum characters" + ' 50.')
            ,
    email: string({required_error: "This field is required."})
            .min(1, "This field is required.")
            .email("Invalid format"),
    phone: string(),
    message: string({required_error: "This field is required."})
            .min(3, "Minimum characters" + ' 3.')
            .max(500,  "Maximum characters" + ' 500.')
})

export const contactSchemaKr = object({
    name: string({required_error: "이 필드는 필수입니다."})
            .min(1, "이 필드는 필수입니다.")
            .max(20, "최소 문자" + ' 20.')
            ,
    subject: string({required_error: "이 필드는 필수입니다."})
            .min(1, "이 필드는 필수입니다.")
            .max(50,  "최소 문자" + ' 50.')
            ,
    email: string({required_error: "이 필드는 필수입니다."})
            .min(1, "이 필드는 필수입니다.")
            .email("잘못된 형식"),
    phone: string(),
    message: string({required_error: "이 필드는 필수입니다."})
            .min(3, "최대 문자" + ' 3.')
            .max(500,  "최소 문자" + ' 500.')
})
