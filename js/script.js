		function func(){
			
			
			var TR2 = Number(document.getElementById("TR2").value);
			var TR1 = Number(document.getElementById("TR1").value);
			var TR0 = Number(document.getElementById("TR0").value);
			var St2 = Number(document.getElementById("St2").value);
			var St1 = Number(document.getElementById("St1").value);
			var St0 = Number(document.getElementById("St0").value);
			var St00 = Number(document.getElementById("St00").value);
			var TA2 = Number(document.getElementById("TA2").value);
			var TA1 = Number(document.getElementById("TA1").value);
			var TA0 = Number(document.getElementById("TA0").value);
			var TA00 = Number(document.getElementById("TA00").value);
			var CA2 = Number(document.getElementById("CA2").value);
			var CA1 = Number(document.getElementById("CA1").value);
			var CA0 = Number(document.getElementById("CA0").value);
			var TE2 = Number(document.getElementById("TE2").value);
			var TE1 = Number(document.getElementById("TE1").value);
			var TE0 = Number(document.getElementById("TE0").value);
			var BC2 = Number(document.getElementById("BC2").value);
			var BC1 = Number(document.getElementById("BC1").value);
			var BC0 = Number(document.getElementById("BC0").value);
			var NP2 = Number(document.getElementById("NP2").value);
			var NP1 = Number(document.getElementById("NP1").value);
			var NP0 = Number(document.getElementById("NP0").value);
			var CL2 = Number(document.getElementById("CL2").value);
			var CL1 = Number(document.getElementById("CL1").value);
			var CL0 = Number(document.getElementById("CL0").value);
			var FA2 = Number(document.getElementById("FA2").value);
			var FA1 = Number(document.getElementById("FA1").value);
			var FA0 = Number(document.getElementById("FA0").value);
			var AR2 = Number(document.getElementById("AR2").value);
			var AR1 = Number(document.getElementById("AR1").value);
			var AR0 = Number(document.getElementById("AR0").value);
			var AR00 = Number(document.getElementById("AR00").value);
			var CF2 = Number(document.getElementById("CF2").value);
			var CF1 = Number(document.getElementById("CF1").value);
			var CF0 = Number(document.getElementById("CF0").value);
			var SF2 = Number(document.getElementById("SF2").value);
			var SF1 = Number(document.getElementById("SF1").value);
			var SF0 = Number(document.getElementById("SF0").value);
			var AP2 = Number(document.getElementById("AP2").value);
			var AP1 = Number(document.getElementById("AP1").value);
			var AP0 = Number(document.getElementById("AP0").value);
			var EB2 = Number(document.getElementById("EB2").value);
			var EB1 = Number(document.getElementById("EB1").value);
			var EB0 = Number(document.getElementById("EB0").value);
			
			var TSt2 = St2 + St1;
			var AvS2 = TSt2 / 2;
			var K12 = TR2 / AvS2;
			var K22 = CA2 / CL2;
			var K32 = TE2 / BC2;
			var K42 = NP2 / TA2;
			var K52 = NP2 / TR2;
			var R2 = 25 * K12 + 25 * K22 + 20 * K32 + 20 * K42 + 10 * K52;
			
			var TSt1 = St1 + St0;
			var AvS1 = TSt1 / 2;
			var K11 = TR1 / AvS1;
			var K21 = CA1 / CL1;
			var K31 = TE1 / BC1;
			var K41 = NP1 / TA1;
			var K51 = NP1 / TR1;
			var R1 = 25 * K11 + 25 * K21 + 20 * K31 + 20 * K41 + 10 * K51;
			
			var TSt0 = St0 + St00;
			var AvS0 = TSt0 / 2;
			var K10 = TR0 / AvS0;
			var K20 = CA0 / CL0;
			var K30 = TE0 / BC0;
			var K40 = NP0 / TA0;
			var K50 = NP0 / TR0;
			var R0 = 25 * K10 + 25 * K20 + 20 * K30 + 20 * K40 + 10 * K50;
			
			
			
			
			
			var COC2 = TE2 - FA2;
			var N12 = COC2 / CA2;
			var N22 = CA2 / CL2;
			var E02 = TA1 + TA2;
			var AvE2 = E02 / 2;
			var N32 = TR2 / AvE2;
			var N42 = NP2 / TR2;
			var N52 = NP2 / TE2;
			var NR2 = 2 * N12 + 1 / 10  * N22 + 8 / 100 * N32 + 45 / 100 * N42 + N52;
			
			var COC1 = TE1 - FA1;
			var N11 = COC1 / CA1;
			var N21 = CA1 / CL1;
			var E01 = TA1 + TA0;
			var AvE1 = E01 / 2;
			var N31 = TR1 / AvE1;
			var N41 = NP1 / TR1;
			var N51 = NP1 / TE1;
			var NR1 = 2 * N11 + 1 / 10  * N21 + 8 / 100 * N31 + 45 / 100 * N41 + N51;
			
			var COC0 = TE0 - FA0;
			var N10 = COC0 / CA0;
			var N20 = CA0 / CL0;
			var E00 = TA0 + TA00;
			var AvE0 = E00 / 2;
			var N30 = TR0 / AvE0;
			var N40 = NP0 / TR0;
			var N50 = NP0 / TE0;
			var NR0 = 2 * N10 + 1 / 10  * N20 + 8 / 100 * N30 + 45 / 100 * N40 + N50;
			
			
			
			
			
			
			
			
			var M12 = EB2 / TE2;
			var M22 = AP2 / AR2;
			var	LA2 = CF2 + SF2;
			var M32 = CL2 / LA2;
			var M42 = EB2 / TR2;
			var M52 = BC2 / TE2;
			var M62 = TA2 / TR2;
			var MR2 = 25 / 100 * M12 + 1 / 10 * M22 + 2 / 10 * M32 + 25 / 100 * M42 + 1 / 10 * M52 + 1 / 10 * M62;
			
			var M11 = EB1 / TE1;
			var M21 = AP1 / AR1;
			var	LA1 = CF1 + SF1;
			var M31 = CL1 / LA1;
			var M41 = EB1 / TR1;
			var M51 = BC1 / TE1;
			var M61 = TA1 / TR1;
			var MR1 = 25 / 100 * M11 + 1 / 10 * M21 + 2 / 10 * M31 + 25 / 100 * M41 + 1 / 10 * M51 + 1 / 10 * M61;
			
			var M10 = EB0 / TE0;
			var M20 = AP0 / AR0;
			var	LA0 = CF0 + SF0;
			var M30 = CL0 / LA0;
			var M40 = EB0 / TR0;
			var M50 = BC0 / TE0;
			var M60 = TA0 / TR0;
			var MR0 = 25 / 100 * M10 + 1 / 10 * M20 + 2 / 10 * M30 + 25 / 100 * M40 + 1 / 10 * M50 + 1 / 10 * M60;
			
			
			
			var ARCL2 = AR2 + CL2;
			var P12 = ARCL2 / CL2;
			var P22 = TE2 / BC2;
			var P32 = TE2 / FA2;
			var P42 = TR2 / AvS2;
			var AvAR2 = AR2 / 2 + AR1 / 2;
			var P52 = TR2 / AvAR2;
			var PR2 = 25 * P12 + 25 * P22 + 10 * P32 + 20 * P42 + 20 * P52;
			
			var ARCL1 = AR1 + CL1;
			var P11 = ARCL1 / CL1;
			var P21 = TE1 / BC1;
			var P31 = TE1 / FA1;
			var P41 = TR1 / AvS1;
			var AvAR1 = AR1 / 2 + AR0 / 2;
			var P51 = TR1 / AvAR1;
			var PR1 = 25 * P11 + 25 * P21 + 10 * P31 + 20 * P41 + 20 * P51;
			
			var ARCL0 = AR0 + CL0;
			var P10 = ARCL0 / CL0;
			var P20 = TE0 / BC0;
			var P30 = TE0 / FA0;
			var P40 = TR0 / AvS0;
			var AvAR0 = AR0 / 2 + AR00 / 2;
			var P50 = TR0 / AvAR0;
			var PR0 = 25 * P10 + 25 * P20 + 10 * P30 + 20 * P40 + 20 * P50;
			
			K12 = K12.toFixed(3);
			K22 = K22.toFixed(3);
			K32  = K32.toFixed(3);
			K42  = K42.toFixed(3);
			K52  = K52.toFixed(3);			
			R2  = R2 .toFixed(3);
			N12 = N12.toFixed(3);
			N22 = N22.toFixed(3);
			N32 =  N32.toFixed(3);
			N42 =  N42.toFixed(3);
			N52 =  N52.toFixed(3);
			NR2 =  NR2.toFixed(3);
			M12 =  M12.toFixed(3);
			M22 =  M22.toFixed(3);
			M32 =  M32.toFixed(3);
			M42 =  M42.toFixed(3);
			M52 =  M52.toFixed(3);
			M62 =  M62.toFixed(3);
			MR2 =  MR2.toFixed(3);
			P12 =  P12.toFixed(3);
			P22 =  P22.toFixed(3);
			P32 =  P32.toFixed(3);
			P42 =  P42.toFixed(3);
			P52 =  P52.toFixed(3);
			PR2 =  PR2.toFixed(3);
			
			
			K11 = K11.toFixed(3);
			K21 = K21.toFixed(3);
			K31  = K31.toFixed(3);
			K41  = K41.toFixed(3);
			K51  = K51.toFixed(3);			
			R1  = R1 .toFixed(3);
			N11 = N11.toFixed(3);
			N21 = N21.toFixed(3);
			E01 = E01.toFixed(3);
			N31 =  N31.toFixed(3);
			N41 =  N41.toFixed(3);
			N51 =  N51.toFixed(3);
			NR1 =  NR1.toFixed(3);
			M11 =  M11.toFixed(3);
			M21 =  M21.toFixed(3);
			M31 =  M31.toFixed(3);
			M41 =  M41.toFixed(3);
			M51 =  M51.toFixed(3);
			M61 =  M61.toFixed(3);
			MR1 =  MR1.toFixed(3);
			P11 =  P11.toFixed(3);
			P21 =  P21.toFixed(3);
			P31 =  P31.toFixed(3);
			P41 =  P41.toFixed(3);
			P51 =  P51.toFixed(3);
			PR1 =  PR1.toFixed(3);
			
			K10 = K10.toFixed(3);
			K20 = K20.toFixed(3);
			K30  = K30.toFixed(3);
			K40  = K40.toFixed(3);
			K50  = K50.toFixed(3);			
			R0  = R0 .toFixed(3);
			N10 = N10.toFixed(3);
			N20 = N20.toFixed(3);
			E02 = E02.toFixed(3);
			N30 =  N30.toFixed(3);
			N40 =  N40.toFixed(3);
			N50 =  N50.toFixed(3);
			NR0 =  NR0.toFixed(3);
			M10 =  M10.toFixed(3);
			M20 =  M20.toFixed(3);
			M30 =  M30.toFixed(3);
			M40 =  M40.toFixed(3);
			M50 =  M50.toFixed(3);
			M60 =  M60.toFixed(3);
			MR0 =  MR0.toFixed(3);
			P10 =  P10.toFixed(3);
			P20 =  P20.toFixed(3);
			P30 =  P30.toFixed(3);
			P40 =  P40.toFixed(3);
			P50 =  P50.toFixed(3);
			PR0 =  PR0.toFixed(3);
			
            document.getElementById("K12").innerHTML = K12;
			document.getElementById("K22").innerHTML = K22;
			document.getElementById("K32").innerHTML = K32;
			document.getElementById("K42").innerHTML = K42;
			document.getElementById("K52").innerHTML = K52;
			document.getElementById("R2").innerHTML = R2;
            
			document.getElementById("K11").innerHTML = K11;
			document.getElementById("K21").innerHTML = K21;
			document.getElementById("K31").innerHTML = K31;
			document.getElementById("K41").innerHTML = K41;
			document.getElementById("K51").innerHTML = K51;
			document.getElementById("R1").innerHTML = R1;
            
            document.getElementById("K10").innerHTML = K10;
			document.getElementById("K20").innerHTML = K20;
			document.getElementById("K30").innerHTML = K30;
			document.getElementById("K40").innerHTML = K40;
			document.getElementById("K50").innerHTML = K50;
			document.getElementById("R0").innerHTML = R0;
			
            
            document.getElementById("N12").innerHTML = N12;
			document.getElementById("N22").innerHTML = N22;
			document.getElementById("N32").innerHTML = N32;
			document.getElementById("N42").innerHTML = N42;
			document.getElementById("N52").innerHTML = N52;
			document.getElementById("NR2").innerHTML = NR2;
            
			document.getElementById("N11").innerHTML = N11;
			document.getElementById("N21").innerHTML = N21;
			document.getElementById("N31").innerHTML = N31;
			document.getElementById("N41").innerHTML = N41;
			document.getElementById("N51").innerHTML = N51;
			document.getElementById("NR1").innerHTML = NR1;
            
            document.getElementById("N10").innerHTML = N10;
			document.getElementById("N20").innerHTML = N20;
			document.getElementById("N30").innerHTML = N30;
			document.getElementById("N40").innerHTML = N40;
			document.getElementById("N50").innerHTML = N50;
			document.getElementById("NR0").innerHTML = NR0;
            
            
			document.getElementById("M12").innerHTML = M12;
			document.getElementById("M22").innerHTML = M22;
			document.getElementById("M32").innerHTML = M32;
			document.getElementById("M42").innerHTML = M42;
			document.getElementById("M52").innerHTML = M52;
			document.getElementById("M62").innerHTML = M62;
			document.getElementById("MR2").innerHTML = MR2;
            
			document.getElementById("M11").innerHTML = M11;
			document.getElementById("M21").innerHTML = M21;
			document.getElementById("M31").innerHTML = M31;
			document.getElementById("M41").innerHTML = M41;
			document.getElementById("M51").innerHTML = M51;
			document.getElementById("M61").innerHTML = M61;
			document.getElementById("MR1").innerHTML = MR1;
            
            document.getElementById("M10").innerHTML = M10;
			document.getElementById("M20").innerHTML = M20;
			document.getElementById("M30").innerHTML = M30;
			document.getElementById("M40").innerHTML = M40;
			document.getElementById("M50").innerHTML = M50;
			document.getElementById("M60").innerHTML = M60;
			document.getElementById("MR0").innerHTML = MR0;
            
			document.getElementById("P12").innerHTML = P12;
			document.getElementById("P22").innerHTML = P22;
			document.getElementById("P32").innerHTML = P32;
			document.getElementById("P42").innerHTML = P42;
			document.getElementById("P52").innerHTML = P52;
			document.getElementById("PR2").innerHTML = PR2;
            
			document.getElementById("P11").innerHTML = P11;
			document.getElementById("P21").innerHTML = P21;
			document.getElementById("P31").innerHTML = P31;
			document.getElementById("P41").innerHTML = P41;
			document.getElementById("P51").innerHTML = P51;
			document.getElementById("PR1").innerHTML = PR1;
            
            document.getElementById("P10").innerHTML = P10;
			document.getElementById("P20").innerHTML = P20;
			document.getElementById("P30").innerHTML = P30;
			document.getElementById("P40").innerHTML = P40;
			document.getElementById("P50").innerHTML = P50;
			document.getElementById("PR0").innerHTML = PR0;
			}

function Myfunc1(){
            var TR2 = Number(document.getElementById("TR2").value);
			var TR1 = Number(document.getElementById("TR1").value);
			var TR0 = Number(document.getElementById("TR0").value);
			var St2 = Number(document.getElementById("St2").value);
			var St1 = Number(document.getElementById("St1").value);
			var St0 = Number(document.getElementById("St0").value);
			var St00 = Number(document.getElementById("St00").value);
			var TA2 = Number(document.getElementById("TA2").value);
			var TA1 = Number(document.getElementById("TA1").value);
			var TA0 = Number(document.getElementById("TA0").value);
			var TA00 = Number(document.getElementById("TA00").value);
			var CA2 = Number(document.getElementById("CA2").value);
			var CA1 = Number(document.getElementById("CA1").value);
			var CA0 = Number(document.getElementById("CA0").value);
			var TE2 = Number(document.getElementById("TE2").value);
			var TE1 = Number(document.getElementById("TE1").value);
			var TE0 = Number(document.getElementById("TE0").value);
			var BC2 = Number(document.getElementById("BC2").value);
			var BC1 = Number(document.getElementById("BC1").value);
			var BC0 = Number(document.getElementById("BC0").value);
			var NP2 = Number(document.getElementById("NP2").value);
			var NP1 = Number(document.getElementById("NP1").value);
			var NP0 = Number(document.getElementById("NP0").value);
			var CL2 = Number(document.getElementById("CL2").value);
			var CL1 = Number(document.getElementById("CL1").value);
			var CL0 = Number(document.getElementById("CL0").value);
    
            var TSt2 = St2 + St1;
			var AvS2 = TSt2 / 2;
			var K12 = TR2 / AvS2;
			var K22 = CA2 / CL2;
			var K32 = TE2 / BC2;
			var K42 = NP2 / TA2;
			var K52 = NP2 / TR2;
			var R2 = 25 * K12 + 25 * K22 + 20 * K32 + 20 * K42 + 10 * K52;
			
			var TSt1 = St1 + St0;
			var AvS1 = TSt1 / 2;
			var K11 = TR1 / AvS1;
			var K21 = CA1 / CL1;
			var K31 = TE1 / BC1;
			var K41 = NP1 / TA1;
			var K51 = NP1 / TR1;
			var R1 = 25 * K11 + 25 * K21 + 20 * K31 + 20 * K41 + 10 * K51;
			
			var TSt0 = St0 + St00;
			var AvS0 = TSt0 / 2;
			var K10 = TR0 / AvS0;
			var K20 = CA0 / CL0;
			var K30 = TE0 / BC0;
			var K40 = NP0 / TA0;
			var K50 = NP0 / TR0;
			var R0 = 25 * K10 + 25 * K20 + 20 * K30 + 20 * K40 + 10 * K50;
    
            K12 = K12.toFixed(3);
			K22 = K22.toFixed(3);
			K32 = K32.toFixed(3);
			K42 = K42.toFixed(3);
			K52 = K52.toFixed(3);			
			R2  = R2 .toFixed(3);
            K10 = K10.toFixed(3);
			K20 = K20.toFixed(3);
			K30 = K30.toFixed(3);
			K40 = K40.toFixed(3);
			K50 = K50.toFixed(3);			
			R0 = R0 .toFixed(3);
            K11 = K11.toFixed(3);
			K21 = K21.toFixed(3);
			K31 = K31.toFixed(3);
			K41 = K41.toFixed(3);
			K51 = K51.toFixed(3);			
			R1  = R1 .toFixed(3);
            
            document.getElementById("K12").innerHTML = K12;
			document.getElementById("K22").innerHTML = K22;
			document.getElementById("K32").innerHTML = K32;
			document.getElementById("K42").innerHTML = K42;
			document.getElementById("K52").innerHTML = K52;
			document.getElementById("R2").innerHTML = R2;
            
			document.getElementById("K11").innerHTML = K11;
			document.getElementById("K21").innerHTML = K21;
			document.getElementById("K31").innerHTML = K31;
			document.getElementById("K41").innerHTML = K41;
			document.getElementById("K51").innerHTML = K51;
			document.getElementById("R1").innerHTML = R1;
            
            document.getElementById("K10").innerHTML = K10;
			document.getElementById("K20").innerHTML = K20;
			document.getElementById("K30").innerHTML = K30;
			document.getElementById("K40").innerHTML = K40;
			document.getElementById("K50").innerHTML = K50;
			document.getElementById("R0").innerHTML = R0;
}

function Myfunc2(){
    
            var TR2 = Number(document.getElementById("TR2").value);
			var TR1 = Number(document.getElementById("TR1").value);
			var TR0 = Number(document.getElementById("TR0").value);
			var TA2 = Number(document.getElementById("TA2").value);
			var TA1 = Number(document.getElementById("TA1").value);
			var TA0 = Number(document.getElementById("TA0").value);
			var TA00 = Number(document.getElementById("TA00").value);
			var CA2 = Number(document.getElementById("CA2").value);
			var CA1 = Number(document.getElementById("CA1").value);
			var CA0 = Number(document.getElementById("CA0").value);
			var TE2 = Number(document.getElementById("TE2").value);
			var TE1 = Number(document.getElementById("TE1").value);
			var TE0 = Number(document.getElementById("TE0").value);
			var NP2 = Number(document.getElementById("NP2").value);
			var NP1 = Number(document.getElementById("NP1").value);
			var NP0 = Number(document.getElementById("NP0").value);
			var CL2 = Number(document.getElementById("CL2").value);
			var CL1 = Number(document.getElementById("CL1").value);
			var CL0 = Number(document.getElementById("CL0").value);
			var FA2 = Number(document.getElementById("FA2").value);
			var FA1 = Number(document.getElementById("FA1").value);
			var FA0 = Number(document.getElementById("FA0").value);
    
            var COC2 = TE2 - FA2;
			var N12 = COC2 / CA2;
			var N22 = CA2 / CL2;
			var E02 = TA1 + TA2;
			var AvE2 = E02 / 2;
			var N32 = TR2 / AvE2;
			var N42 = NP2 / TR2;
			var N52 = NP2 / TE2;
			var NR2 = 2 * N12 + 1 / 10  * N22 + 8 / 100 * N32 + 45 / 100 * N42 + N52;
			
			var COC1 = TE1 - FA1;
			var N11 = COC1 / CA1;
			var N21 = CA1 / CL1;
			var E01 = TA1 + TA0;
			var AvE1 = E01 / 2;
			var N31 = TR1 / AvE1;
			var N41 = NP1 / TR1;
			var N51 = NP1 / TE1;
			var NR1 = 2 * N11 + 1 / 10  * N21 + 8 / 100 * N31 + 45 / 100 * N41 + N51;
			
			var COC0 = TE0 - FA0;
			var N10 = COC0 / CA0;
			var N20 = CA0 / CL0;
			var E00 = TA0 + TA00;
			var AvE0 = E00 / 2;
			var N30 = TR0 / AvE0;
			var N40 = NP0 / TR0;
			var N50 = NP0 / TE0;
			var NR0 = 2 * N10 + 1 / 10  * N20 + 8 / 100 * N30 + 45 / 100 * N40 + N50;
            
            N12 = N12.toFixed(3);
			N22 = N22.toFixed(3);
			N32 =  N32.toFixed(3);
			N42 =  N42.toFixed(3);
			N52 =  N52.toFixed(3);
			NR2 =  NR2.toFixed(3);
            N11 = N11.toFixed(3);
			N21 = N21.toFixed(3);
			E01 = E01.toFixed(3);
			N31 =  N31.toFixed(3);
			N41 =  N41.toFixed(3);
			N51 =  N51.toFixed(3);
			NR1 =  NR1.toFixed(3);
            N10 = N10.toFixed(3);
			N20 = N20.toFixed(3);
			E02 = E02.toFixed(3);
			N30 =  N30.toFixed(3);
			N40 =  N40.toFixed(3);
			N50 =  N50.toFixed(3);
			NR0 =  NR0.toFixed(3);
            
            document.getElementById("N12").innerHTML = N12;
			document.getElementById("N22").innerHTML = N22;
			document.getElementById("N32").innerHTML = N32;
			document.getElementById("N42").innerHTML = N42;
			document.getElementById("N52").innerHTML = N52;
			document.getElementById("NR2").innerHTML = NR2;
            
			document.getElementById("N11").innerHTML = N11;
			document.getElementById("N21").innerHTML = N21;
			document.getElementById("N31").innerHTML = N31;
			document.getElementById("N41").innerHTML = N41;
			document.getElementById("N51").innerHTML = N51;
			document.getElementById("NR1").innerHTML = NR1;
            
            document.getElementById("N10").innerHTML = N10;
			document.getElementById("N20").innerHTML = N20;
			document.getElementById("N30").innerHTML = N30;
			document.getElementById("N40").innerHTML = N40;
			document.getElementById("N50").innerHTML = N50;
			document.getElementById("NR0").innerHTML = NR0;
			
}

function Myfunc3(){
    
            var TR2 = Number(document.getElementById("TR2").value);
			var TR1 = Number(document.getElementById("TR1").value);
			var TR0 = Number(document.getElementById("TR0").value);
			var TA2 = Number(document.getElementById("TA2").value);
			var TA1 = Number(document.getElementById("TA1").value);
			var TA0 = Number(document.getElementById("TA0").value);
			var TE2 = Number(document.getElementById("TE2").value);
			var TE1 = Number(document.getElementById("TE1").value);
			var TE0 = Number(document.getElementById("TE0").value);
			var BC2 = Number(document.getElementById("BC2").value);
			var BC1 = Number(document.getElementById("BC1").value);
			var BC0 = Number(document.getElementById("BC0").value);
			var CL2 = Number(document.getElementById("CL2").value);
			var CL1 = Number(document.getElementById("CL1").value);
			var CL0 = Number(document.getElementById("CL0").value);
			var AR2 = Number(document.getElementById("AR2").value);
			var AR1 = Number(document.getElementById("AR1").value);
			var AR0 = Number(document.getElementById("AR0").value);
			var CF2 = Number(document.getElementById("CF2").value);
			var CF1 = Number(document.getElementById("CF1").value);
			var CF0 = Number(document.getElementById("CF0").value);
			var SF2 = Number(document.getElementById("SF2").value);
			var SF1 = Number(document.getElementById("SF1").value);
			var SF0 = Number(document.getElementById("SF0").value);
			var AP2 = Number(document.getElementById("AP2").value);
			var AP1 = Number(document.getElementById("AP1").value);
			var AP0 = Number(document.getElementById("AP0").value);
			var EB2 = Number(document.getElementById("EB2").value);
			var EB1 = Number(document.getElementById("EB1").value);
			var EB0 = Number(document.getElementById("EB0").value);
    
            var M12 = EB2 / TE2;
			var M22 = AP2 / AR2;
			var	LA2 = CF2 + SF2;
			var M32 = CL2 / LA2;
			var M42 = EB2 / TR2;
			var M52 = BC2 / TE2;
			var M62 = TA2 / TR2;
			var MR2 = 25 / 100 * M12 + 1 / 10 * M22 + 2 / 10 * M32 + 25 / 100 * M42 + 1 / 10 * M52 + 1 / 10 * M62;
			
			var M11 = EB1 / TE1;
			var M21 = AP1 / AR1;
			var	LA1 = CF1 + SF1;
			var M31 = CL1 / LA1;
			var M41 = EB1 / TR1;
			var M51 = BC1 / TE1;
			var M61 = TA1 / TR1;
			var MR1 = 25 / 100 * M11 + 1 / 10 * M21 + 2 / 10 * M31 + 25 / 100 * M41 + 1 / 10 * M51 + 1 / 10 * M61;
			
			var M10 = EB0 / TE0;
			var M20 = AP0 / AR0;
			var	LA0 = CF0 + SF0;
			var M30 = CL0 / LA0;
			var M40 = EB0 / TR0;
			var M50 = BC0 / TE0;
			var M60 = TA0 / TR0;
			var MR0 = 25 / 100 * M10 + 1 / 10 * M20 + 2 / 10 * M30 + 25 / 100 * M40 + 1 / 10 * M50 + 1 / 10 * M60;
    
            M10 =  M10.toFixed(3);
			M20 =  M20.toFixed(3);
			M30 =  M30.toFixed(3);
			M40 =  M40.toFixed(3);
			M50 =  M50.toFixed(3);
			M60 =  M60.toFixed(3);
			MR0 =  MR0.toFixed(3);
            M11 =  M11.toFixed(3);
			M21 =  M21.toFixed(3);
			M31 =  M31.toFixed(3);
			M41 =  M41.toFixed(3);
			M51 =  M51.toFixed(3);
			M61 =  M61.toFixed(3);
			MR1 =  MR1.toFixed(3);
            M12 =  M12.toFixed(3);
			M22 =  M22.toFixed(3);
			M32 =  M32.toFixed(3);
			M42 =  M42.toFixed(3);
			M52 =  M52.toFixed(3);
			M62 =  M62.toFixed(3);
			MR2 =  MR2.toFixed(3);
            
            document.getElementById("M12").innerHTML = M12;
			document.getElementById("M22").innerHTML = M22;
			document.getElementById("M32").innerHTML = M32;
			document.getElementById("M42").innerHTML = M42;
			document.getElementById("M52").innerHTML = M52;
			document.getElementById("M62").innerHTML = M62;
			document.getElementById("MR2").innerHTML = MR2;
            
			document.getElementById("M11").innerHTML = M11;
			document.getElementById("M21").innerHTML = M21;
			document.getElementById("M31").innerHTML = M31;
			document.getElementById("M41").innerHTML = M41;
			document.getElementById("M51").innerHTML = M51;
			document.getElementById("M61").innerHTML = M61;
			document.getElementById("MR1").innerHTML = MR1;
            
            document.getElementById("M10").innerHTML = M10;
			document.getElementById("M20").innerHTML = M20;
			document.getElementById("M30").innerHTML = M30;
			document.getElementById("M40").innerHTML = M40;
			document.getElementById("M50").innerHTML = M50;
			document.getElementById("M60").innerHTML = M60;
			document.getElementById("MR0").innerHTML = MR0;
}

function Myfunc4(){
            var TR2 = Number(document.getElementById("TR2").value);
			var TR1 = Number(document.getElementById("TR1").value);
			var TR0 = Number(document.getElementById("TR0").value);
			var St2 = Number(document.getElementById("St2").value);
			var St1 = Number(document.getElementById("St1").value);
			var St0 = Number(document.getElementById("St0").value);
			var St00 = Number(document.getElementById("St00").value);
			var TE2 = Number(document.getElementById("TE2").value);
			var TE1 = Number(document.getElementById("TE1").value);
			var TE0 = Number(document.getElementById("TE0").value);
			var BC2 = Number(document.getElementById("BC2").value);
			var BC1 = Number(document.getElementById("BC1").value);
			var BC0 = Number(document.getElementById("BC0").value);
			var CL2 = Number(document.getElementById("CL2").value);
			var CL1 = Number(document.getElementById("CL1").value);
			var CL0 = Number(document.getElementById("CL0").value);
			var FA2 = Number(document.getElementById("FA2").value);
			var FA1 = Number(document.getElementById("FA1").value);
			var FA0 = Number(document.getElementById("FA0").value);
			var AR2 = Number(document.getElementById("AR2").value);
			var AR1 = Number(document.getElementById("AR1").value);
			var AR0 = Number(document.getElementById("AR0").value);
			var AR00 = Number(document.getElementById("AR00").value);
			
            var TSt2 = St2 + St1;
            var TSt1 = St1 + St0;
            var TSt0 = St0 + St00;
            var AvS2 = TSt2 / 2;
            var AvS1 = TSt1 / 2;
            var AvS0 = TSt0 / 2;
    
            var ARCL2 = AR2 + CL2;
			var P12 = ARCL2 / CL2;
			var P22 = TE2 / BC2;
			var P32 = TE2 / FA2;
			var P42 = TR2 / AvS2;
			var AvAR2 = AR2 / 2 + AR1 / 2;
			var P52 = TR2 / AvAR2;
			var PR2 = 25 * P12 + 25 * P22 + 10 * P32 + 20 * P42 + 20 * P52;
			
			var ARCL1 = AR1 + CL1;
			var P11 = ARCL1 / CL1;
			var P21 = TE1 / BC1;
			var P31 = TE1 / FA1;
			var P41 = TR1 / AvS1;
			var AvAR1 = AR1 / 2 + AR0 / 2;
			var P51 = TR1 / AvAR1;
			var PR1 = 25 * P11 + 25 * P21 + 10 * P31 + 20 * P41 + 20 * P51;
			
			var ARCL0 = AR0 + CL0;
			var P10 = ARCL0 / CL0;
			var P20 = TE0 / BC0;
			var P30 = TE0 / FA0;
			var P40 = TR0 / AvS0;
			var AvAR0 = AR0 / 2 + AR00 / 2;
			var P50 = TR0 / AvAR0;
			var PR0 = 25 * P10 + 25 * P20 + 10 * P30 + 20 * P40 + 20 * P50;
            
            P12 =  P12.toFixed(3);
			P22 =  P22.toFixed(3);
			P32 =  P32.toFixed(3);
			P42 =  P42.toFixed(3);
			P52 =  P52.toFixed(3);
			PR2 =  PR2.toFixed(3);
            P11 =  P11.toFixed(3);
			P21 =  P21.toFixed(3);
			P31 =  P31.toFixed(3);
			P41 =  P41.toFixed(3);
			P51 =  P51.toFixed(3);
			PR1 =  PR1.toFixed(3);
            P10 =  P10.toFixed(3);
			P20 =  P20.toFixed(3);
			P30 =  P30.toFixed(3);
			P40 =  P40.toFixed(3);
			P50 =  P50.toFixed(3);
			PR0 =  PR0.toFixed(3);
            
            document.getElementById("P12").innerHTML = P12;
			document.getElementById("P22").innerHTML = P22;
			document.getElementById("P32").innerHTML = P32;
			document.getElementById("P42").innerHTML = P42;
			document.getElementById("P52").innerHTML = P52;
			document.getElementById("PR2").innerHTML = PR2;
            
			document.getElementById("P11").innerHTML = P11;
			document.getElementById("P21").innerHTML = P21;
			document.getElementById("P31").innerHTML = P31;
			document.getElementById("P41").innerHTML = P41;
			document.getElementById("P51").innerHTML = P51;
			document.getElementById("PR1").innerHTML = PR1;
            
            document.getElementById("P10").innerHTML = P10;
			document.getElementById("P20").innerHTML = P20;
			document.getElementById("P30").innerHTML = P30;
			document.getElementById("P40").innerHTML = P40;
			document.getElementById("P50").innerHTML = P50;
			document.getElementById("PR0").innerHTML = PR0;
}