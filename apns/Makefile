###############################################
#
# Makefile
#
###############################################

clean:
	rm -f apns.*

all: clean key csr cert

key:
	openssl genrsa -out apns.key 2048

csr:
	openssl req -new -subj '/O=Apple Inc./C=US/ST=California/L=Cupertino/CN=www.apple.com' -key apns.key -out apns.csr

cert:
	openssl x509 -req -days 1826 -in apns.csr -signkey apns.key -out apns.crt

pem:
	# from Apple portal
	openssl x509 -in apns.cer -inform DER -out apns-crt.pem -outform PEM

dump:
	openssl x509 -in apns.crt -text
