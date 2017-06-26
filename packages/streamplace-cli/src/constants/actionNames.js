// These get special non-prefixed treatment so they can double as the CLI commands
export const COMMAND_SYNC = "SYNC";
export const COMMAND_SERVE = "SERVE";
export const COMMAND_BUILD = "BUILD";

export const WATCHER_READY = "WATCHER_READY";
export const WATCHER_ADD = "WATCHER_ADD";
export const WATCHER_CHANGE = "WATCHER_CHANGE";
export const WATCHER_UNLINK = "WATCHER_UNLINK";
export const WATCHER_LOAD_FILE = "WATCHER_LOAD_FILE";
export const WATCHER_LOAD_FILE_SUCCESS = "WATCHER_LOAD_FILE_SUCCESS";
export const WATCHER_LOAD_FILE_ERROR = "WATCHER_LOAD_FILE_ERROR";
export const WATCHER_WATCH = "WATCHER_WATCH";

export const SERVER_LISTEN = "SERVER_LISTEN";
export const SERVER_LISTEN_SUCCESS = "SERVER_LISTEN_SUCCESS";
export const SERVER_LISTEN_ERROR = "SERVER_LISTEN_ERROR";
export const SERVER_CONNECTION = "SERVER_CONNECTION";

export const SOCKET_CONNECT = "SOCKET_CONNECT";
export const SOCKET_CONNECT_SUCCESS = "SOCKET_CONNECT_SUCCESS";
export const SOCKET_CONNECT_ERROR = "SOCKET_CONNECT_ERROR";
export const SOCKET_CONNECT_TIMEOUT = "SOCKET_CONNECT_TIMEOUT";
export const SOCKET_CLOSE = "SOCKET_CLOSE";
export const SOCKET_ERROR = "SOCKET_ERROR";
export const SOCKET_MESSAGE = "SOCKET_MESSAGE";
export const SOCKET_PING = "SOCKET_PING";
export const SOCKET_PONG = "SOCKET_PONG";
export const SOCKET_UNEXPECTED_RESPONSE = "SOCKET_UNEXPECTED_RESPONSE";
export const SOCKET_SEND_FILE = "SOCKET_SEND_FILE";

// Also socket things, but separate namespace 'cuz there's a lot
export const MESSAGE_FILE = "MESSAGE_FILE";
