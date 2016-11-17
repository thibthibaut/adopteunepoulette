def mettreAuCarre(leNombre):
    lavaleur = leNombre*leNombre
    return lavaleur


x = input("Quel age avez vous ?")

if x < 18:
    print "Vous etes mineur"
else:
    print "Vous etes majeur"


for i in range(0, 10001):
    if i % 3 == 0 and i % 5 == 0:
        print i, " est divisible par 3 et 5" 


