#!/usr/bin/env python3

import cgi

our_form = cgi.FieldStorage()

TR1 = our_form.getfirst("TR1","Не задано")
St0 = our_form.getfirst("St0", "Не задано")
St1 = our_form.getfirst("St1","Не задано")
TA1 = our_form.getfirst("TA1","Не задано")
CA1 = our_form.getfirst("CA1","Не задано")
TE1 = our_form.getfirst("TE1","Не задано")
BC1 = our_form.getfirst("BC1","Не задано")
NP1 = our_form.getfirst("NP1","Не задано")
CL1 = our_form.getfirst("CL1","Не задано")
print("Content-type: text/html")
print()
AvS = (int(St0) + int(St1)) / 2
K1 = int(TR1) / int(AvS)
K2 = int(CA1) / int(CL1)
K3 = int(TE1) / int(BC1)
K4 = int(NP1) / int(TA1)
K5 = int(NP1) / int(TR1)
R1 = 25 * K1 + 25 * K2 + 20 * K3 + 20 * K4 + 10 * K5

print( 'Коэффициент оборачиваемости запасов = ', K1, '</br>')
print( 'Коэффициент текущей ликвидности = ', K2, '</br>')
print( 'Коэффициент структуры капитала = ', K3, '</br>')
print( 'Коэффициент рентабельности активов = ', K4, '</br>')
print( 'Коэффициент эффективности или рентабельность продаж = ', K5, '</br>')
print( 'Общая оценка по моделе Селезневой и Йоновой = ', R1, '</br>')

