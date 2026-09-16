import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [bet, setBet] = useState("100");
  const amount = parseFloat(bet) || 0;
  const fee = Math.min(amount * 0.1, 50);
  const vat = fee * 0.15;
  const total = fee + vat;
  const payout = amount - total;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      <Text style={styles.title}>SportyBet Arena</Text>
      <Text style={styles.sub}>Johannesburg, South Africa | Est. 2021</Text>

      <View style={styles.card}>
        <Text style={styles.h}>1. Home Page</Text>
        <Text style={styles.t}>
          Hero: Bet on your favorite matches live - Real odds, real action
          {"\n\n"}Featured:{"\n"}• Kaizer Chiefs vs Pirates - Today 20:30 Live
          {"\n"}• Sundowns vs Stellenbosch - Tomorrow 15:00{"\n"}• Orlando vs
          Celtic - Tomorrow 20:00
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.h}>2. About Us Page</Text>
        <Text style={styles.t}>
          History: SportyBet Arena (Pty) Ltd founded 2021 in Johannesburg,
          Gauteng. Started 5 employees, now thousands. Comply SA gambling regs.
          Expanded youth sponsorship 2023.
        </Text>
        <Text style={styles.h2}>Mission</Text>
        <Text style={styles.t}>
          Make sports betting fun & accessible, affordable, secure.
        </Text>
        <Text style={styles.h2}>Vision</Text>
        <Text style={styles.t}>
          Become Africa's leading trusted sports betting community.
        </Text>
        <Text style={styles.h2}>Business Goal</Text>
        <Text style={styles.t}>
          Grow to 100,000 users by 2027, maintain fees below R50, reinvest 10%
          into youth sports in Gauteng.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.h}>3. Overview Page</Text>
        <Text style={styles.t}>
          Dashboard:{"\n"}Users: 100k+ (+12%){"\n"}Fees: R250k (+8%){"\n"}
          Matches: 320{"\n\n"}Active Today: 4,200{"\n"}Youth Programs: 18{"\n"}
          Avg Bet: R120
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.h}>4. Individual Match</Text>
        <Text style={styles.t}>
          Kaizer Chiefs vs Pirates - Today 20:30 - FNB Stadium{"\n\n"}Odds:
          {"\n"}Chiefs 2.10 [BET]{"\n"}Draw 3.20 [BET]{"\n"}Pirates 3.50 [BET]
          {"\n\n"}Comments: footy_fan: Hope Chiefs win!
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.h}>5. Calculate Fees - ZAR Calculator</Text>
        <Text style={styles.label}>Enter Bet Amount (R)</Text>
        <TextInput
          style={styles.input}
          value={bet}
          onChangeText={setBet}
          keyboardType="numeric"
          placeholder="100"
        />
        <View style={styles.box}>
          <Text style={styles.t}>Bet Amount: R{amount.toFixed(2)}</Text>
          <Text style={styles.t}>Fee 10% capped R50: R{fee.toFixed(2)}</Text>
          <Text style={styles.t}>VAT 15%: R{vat.toFixed(2)}</Text>
          <Text style={styles.total}>Total Fees: R{total.toFixed(2)}</Text>
          <Text style={styles.pay}>You Receive: R{payout.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.h}>6. Contact Us</Text>
        <Text style={styles.t}>
          Form: Name, Email, Message, Send{"\n\n"}Address: 101 Sporty St, JHB
          2001{"\n"}Phone: +27 11 555 0123{"\n"}Email: support@sportybet.co.za
          {"\n"}Map: Johannesburg, South Africa
        </Text>
      </View>

      <Text style={styles.footer}>
        POPIA Compliant - 18+ Only - Gauteng Gambling Board
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 12,
    paddingTop: 50,
  },
  title: {
    color: "#22c55e",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  sub: {
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 16,
    fontSize: 12,
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  h: { color: "#22c55e", fontWeight: "bold", fontSize: 16, marginBottom: 8 },
  h2: { color: "#e2e8f0", fontWeight: "bold", marginTop: 10, fontSize: 13 },
  t: { color: "#cbd5e1", fontSize: 13, lineHeight: 18 },
  label: { color: "white", marginTop: 10, marginBottom: 6, fontWeight: "bold" },
  input: { backgroundColor: "white", padding: 10, borderRadius: 8 },
  box: {
    backgroundColor: "#0f172a",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  total: { color: "#f87171", fontWeight: "bold", marginTop: 8 },
  pay: { color: "#22c55e", fontWeight: "bold", fontSize: 18, marginTop: 6 },
  footer: {
    color: "#64748b",
    textAlign: "center",
    marginTop: 20,
    fontSize: 10,
  },
});
