import http.server
import socketserver
import argparse
import os

# Параметры командной строки для указания порта
parser = argparse.ArgumentParser(description='Simple HTTP Server')
parser.add_argument('--port', type=int, default=8000, help='Port to run the server on')
args = parser.parse_args()

# Убедимся, что файл index.html существует в текущем каталоге
if not os.path.exists('index.html'):
    with open('index.html', 'w') as f:
        f.write('<html><body><h1>Hello, World!</h1></body></html>')

# Установка обработчика и запуск сервера
handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", args.port), handler)

print(f"Serving on port {args.port}")
httpd.serve_forever()
