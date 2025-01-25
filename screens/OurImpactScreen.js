import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Title from "./utils/Title";
import Webtext from "./utils/Webtext";

function OurImpactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Title style={styles.title}>Sandrine They/Them</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              "RaricaNow is a very caring growing family that reaches out,
              supports and builds their community, ensuring that everyone feels
              welcomed, and has access to resources and safe community space.
              Speaking as a Black Queer Non-binary person who has been invited by
              Rarica to speak about Trans and non-binary Mental health ...during
              the Trans week of remembrance That took place from 16th-20th
              November in Edmonton, where I was graced to be the guest of honour
              and we shed light and created awareness about mental health
              struggles with in the Black Trans Queer and Non-binary community."
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Community Member</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              "Coming from a Caribbean country to Edmonton was a very
              nerve-wracking experience. For me, RaricaNow was/is a tower of
              strength, a beacon of hope in the community. RaricaNow provided me
              with a safe space in which I could express myself and could find
              support."
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Dantae Tulloch</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              "Hi, my name is Dantae Tulloch. Im a black transgender male who was
              diagnosed with severe depression and anxiety about 5 years ago and a
              few years after PTSD. Living with mental illness has made my day to
              day life very challenging. RARICANOW provided me with funding to help
              with my rent so i wouldn't end up homeless and also funding for my
              mental health. Receiving help through raricanow provided me with more
              hope to live a little bit longer because i now know that there are
              people out there that care for a transgender individual like myself
              that struggles with mental health."
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Shane Singh</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              "My name is Shane Singh and I am a refugee that came to Canada to
              seek asylum from Jamaica. I came to Canada in January 2020 where I
              was introduced to the Director of RaricaNow Mr. Chris Adebayo Katiti.
              He opened RaricaNow's resources to me and I was housed and provided
              with an abundance of support from their resources. RaricaNow was a
              guide through the process of my claim and even assisted in finding
              assistance in gathering evidence and supporting documents."
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
    fontStyle: 'italic',
  },
});

export default OurImpactScreen;