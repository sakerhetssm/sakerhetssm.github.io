#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define MIN(a, b) ((a) > (b) ? (b) : (a))

int given = 0;
int longest = 0;

char **gifts;

int welcome() {
	setvbuf(stdin, NULL, _IONBF, 0);
        setvbuf(stdout, NULL, _IONBF, 0);
	
	puts("Välkommen in i värmen!");
	puts("Vi tänkte precis börja våran julklappsutdelning,");
	puts("så du kan få vara med om du vill :)");
}

int menu() {
	char buf[5];
	puts("");
	puts("1. Ge en julklapp");
	puts("2. Byt ut en julklapp");
	puts("3. Sno en julklapp");
	printf("Val: ");
	fgets(buf, sizeof buf, stdin);
	return atoi(buf);
}

void getinput(char *prompt, char *str, size_t buflen) {
	char c;
	char *start = str;
	printf("%s", prompt);
	
	while ((c = getc(stdin)) != '\n' && (str - start) <= buflen)
		*str++ = c;
	if (*str == '\n')
		*str = '\0';
}

int getint(char *prompt) {
	char lenghtbuf[16];
	getinput(prompt, lenghtbuf, 16);
	return atoi(lenghtbuf);
}

void give() {
	int len;
	char *gift;

	if (given > 15) {
		printf("Herregud, hur många julklappar tänkte du ge egentligen?");
		return;
	}
	
	len = getint("Längden på julklappens namn: ");
	longest = MAX(longest, len);

	gift = malloc(len);

	getinput("Julklappens namn: ", gift, len);
	
	gifts = realloc(gifts, (given + 1) * sizeof *gifts);
	gifts[given++] = gift;

	printf("Du gav presenten %s\n", gift);
}

void change() {
	if (longest == 0) {
		puts("Ehh... Du måste ge en present först?");
		return;
	}
	
	char *gift = NULL;
	char *name = malloc(longest);

	getinput("Namn på julklappen: ", name, longest);
	
	int i;

	for (i = 0; i < 15; i++) {
		if (!gifts[i])
			break;
		
		if (strncmp(gifts[i], name, MIN(strlen(name), strlen(gifts[i]))) == 0) {
			gift = gifts[i];
			break;
		}
	}

	if (!gift) {
		puts("Det finns ingen sån julklapp tyvärr.");
		return;
	}

	getinput("Nytt namn på julklappen: ", gift, longest);
	printf("Bytte till: %s\n", gift);
}

void ajabaja() {
	int idx = getint("Jahaja, vilken julklapp hade du tänkt sno då?: ");
	
	if (!gifts[idx]) {
		printf("Tack och lov så finns det ingen sån julklapp...\n");
		return;
	}
	
	printf("Skammligt asså, %s som var en så fin gåva\n", gifts[idx]);
	free(gifts[idx]);
	given--;
}

int main() {
	welcome();

	while (1) {
		switch (menu()) {
			case 1:
				give();
				break;
			case 2:
				change();
				break;
			case 3:
				ajabaja();
				break;
			default:
				puts("Va sa du?");
		}
	}
}
