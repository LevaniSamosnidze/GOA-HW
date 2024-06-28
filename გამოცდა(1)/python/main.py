def login():
    gmail = input("crate a gmail: ")
    pas = input("crate a passwords: : ")
    gmail1 = input("enter your password: ")
    pas1 = input("enter your gamil: ")
    if gmail == gmail1:
        def user():
            balans = int(input("crate a balans: "))
            while True:
                common = input("enter: deposits, withdrawals, transfer and delete: ")
                
                if common == "deposits":
                    deposit = int(input("enter is amount: "))
                    balans1 = balans + deposit
                    print(balans1)
                    

                elif common == "withdrawals":
                    withdrawals = int(input("how much money do you want to withdraw: "))
                    balans2 = balans1 - withdrawals
                    print(balans2)


                elif common == "transfer":
                    transfer = int(input("enter number: "))
                    print(balans - transfer)
                    balans3 = balans1 - transfer
                    balans4 = balans2 - transfer
                    print(balans3)
                    print(balans4)
                elif common == "delete":
                    return user
                        
            
        user()
    while gmail != gmail1 and pas != pas1:
        gmail1 = input("enter your password: ")
        pas1 = input("enter your gamil: ")
        def user():
            balans = int(input("crate a balans: "))
            while True:
                common = input("enter: deposits, withdrawals, transfer and delete: ")
                
                if common == "deposits":
                    deposit = int(input("enter is amount: "))
                    balans1 = balans + deposit
                    print(balans1)
                    

                elif common == "withdrawals":
                    withdrawals = int(input("how much money do you want to withdraw: "))
                    balans2 = balans1 - withdrawals
                    print(balans2)


                elif common == "transfer":
                    transfer = int(input("enter number: "))
                    balans3 = balans1 - transfer
                    balans4 = balans2 - transfer

                    print(balans4)
                elif common == "delete":
                    return user
                        
                        
            
        user()
        

login()