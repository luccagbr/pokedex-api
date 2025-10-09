const OK_MESSAGE = { status: 200, message: "Conexão bem sucedida." };
const CREATED_MESSAGE = { status: 201, message: "Recurso criado com sucesso." };
const ACEPTED_MESSAGE = { status: 202, message: "Solicitação recebida." };
const NO_CONTENT_MESSAGE = { status: 204, message: "Não há conteúdo para esta solicitação." };
const MULTIPLE_CHOICES_MESSAGE = { status: 300, message: "A solicitação tem mais de uma resposta." };
const MOVED_PERMANENTLY_MESSAGE = {
    status: 301,
    message: "A URL do recurso solicitado foi alterada permanentemente.",
};
const FOUND_MESSAGE = { status: 302, message: "A rota foi alterada temporariamente." };
const SEE_OTHER_MESSAGE = { status: 303, message: "A solicitação deve ser feita em outra URI." };
const PERMANENT_REDIRECT_MESSAGE = {
    status: 308,
    message: "O recurso solicitado está permanentemente localizado em outro URI.",
};
const BAD_REQUEST_MESSAGE = { status: 400, message: "Solicitação não aceita." };
const UNAUTHORIZED_MESSAGE = { status: 401, message: "Solicitação não autorizada." };
const PAYMENT_REQUIRED_MESSAGE = { status: 402, message: "É necessário realizar o pagamento." };
const FORBIDDEN_MESSAGE = { status: 403, message: "Recurso não autorizado." };
const NOT_FOUND_MESSAGE = { status: 404, message: "Recurso não encontrado." };
const REQUEST_TIMEOUT_MESSAGE = { status: 408, message: "Tempo de conexão expirado." };
const LOCKED_MESSAGE = { status: 423, message: "Recurso bloqueado." };
const TOO_MANY_REQUESTS_MESSAGE = { status: 429, message: "O usuário ultrapassou o limite de requisições" };
const INTERNAL_SERVER_ERROR_MESSAGE = { status: 500, message: "Ocorreu um erro interno." };
const BAD_GATEWAY_MESSAGE = { status: 502, message: "Bad Gateway." };
const SERVICE_UNAVAILABLE_MESSAGE = { status: 503, message: "Não é possível processar requisições." };
const GATEWAY_TIMEOUT_MESSAGE = { status: 504, message: "Limite de resposta excedido." };
const LOOP_DETECTED_MESSAGE = { status: 508, message: "O servidor detectou um loop infinito." };
const NETWORK_AUTHENTICATION_REQUIRED_MESSAGE = { status: 511, message: "Cliente não autenticado." };

export {
    OK_MESSAGE,
    CREATED_MESSAGE,
    ACEPTED_MESSAGE,
    NO_CONTENT_MESSAGE,
    MULTIPLE_CHOICES_MESSAGE,
    MOVED_PERMANENTLY_MESSAGE,
    FOUND_MESSAGE,
    SEE_OTHER_MESSAGE,
    PERMANENT_REDIRECT_MESSAGE,
    BAD_REQUEST_MESSAGE,
    UNAUTHORIZED_MESSAGE,
    PAYMENT_REQUIRED_MESSAGE,
    FORBIDDEN_MESSAGE,
    NOT_FOUND_MESSAGE,
    REQUEST_TIMEOUT_MESSAGE,
    LOCKED_MESSAGE,
    TOO_MANY_REQUESTS_MESSAGE,
    INTERNAL_SERVER_ERROR_MESSAGE,
    BAD_GATEWAY_MESSAGE,
    SERVICE_UNAVAILABLE_MESSAGE,
    GATEWAY_TIMEOUT_MESSAGE,
    LOOP_DETECTED_MESSAGE,
    NETWORK_AUTHENTICATION_REQUIRED_MESSAGE,
};
