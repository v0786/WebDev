FROM gosom/google-maps-scraper:latest
EXPOSE 8080
CMD ["-web", "-data-folder", "/tmp"]
