import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Title from "./utils/Title";
import Webtext from "./utils/Webtext";

function AboutUsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Title style={styles.title}>Our Mission</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              To promote social justice and create a more equitable society for
              all individuals, with a particular focus on enhancing the rights and
              access to basic services for LGBTQ2S+ individuals. We believe that
              by coordinating collaborations and partnerships at the local,
              provincial, national, and international levels, we can work towards
              building a society where every individual can reach their full
              potential and live with dignity and respect.
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Our Vision</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              To create a world where all LGBTQ2S+ individuals have access to the
              necessary social, economic, and cultural resources they need to
              thrive. We strive to be a beacon of hope and support for these
              individuals, helping them feel safe, empowered, and dignified.
              Through our efforts, we hope to build a society that values
              diversity, promotes equality, and celebrates the unique
              contributions of all its members.
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Our Values</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              To enhance and sustain the health and well-being of the lesbian,
              gay, bisexual, transgender and HIV communities by providing
              activities, programs and services that create community. Empower
              community members; provide essential resources; advocate for civil
              and human rights; and embrace, promote and support our cultural
              diversity.
            </Webtext>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a5568',
  },
});

export default AboutUsScreen;