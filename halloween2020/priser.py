pott = []
for user in users:
    lotter = 0
    for challenge in user.solves:
        if challenge.difficulty == "easy": lotter += 1
        if challenge.difficulty == "medium": lotter += 2
        if challenge.difficulty == "hard": lotter += 3
    if lotter < 4: lotter = 0
    pott += [user] * lotter

vinnare = []
while antal_priser:
    user = random.choice(pott)
    if user in vinnare: continue
    vinnare.append(user)
    antal_priser -= 1