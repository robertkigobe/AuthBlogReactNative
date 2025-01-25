import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Title from "./utils/Title";
import Webtext from "./utils/Webtext";

function WhatWeDoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Title style={styles.title}>Stonewall Program</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              Stonewall Canada seeks to innovate new approaches and universal
              solutions to protect Black, Indigenous, Trans and Queer Communities
              and ensure that they have basic mental health access.
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>2slgbtq+ Newcomers and Refugees Support</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              We provide cultural relevant support, legal assistance, social
              entrepreneurship, Health care services, referrals, Housing and
              settlement supports and connect individuals to services they need
              and assist them to navigate the asylum process.
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Gender Diverse Medical Body Chart</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              Our Anatomical body charts program provides training for healthcare
              providers that play a crucial role in supporting transgender
              individuals. These training programs aim to educate healthcare
              professionals on the unique healthcare needs and experiences of
              transgender individuals, with a specific focus on understanding and
              addressing gender dysphoria.
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Employability Program</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              We provide Employability skills training and job search support,
              resume writing and interview preparation training to the Black
              2SLGBTIQ+ Refugees and Newcomers and gender diverse community
              members to assist them in their intergration
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Settlement program</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              At the heart of RaricaNow's tireless advocacy lies the Settlement
              Support Program for refugees and newcomers who often face unique
              challenges in adapting to a new society. This innovative initiative
              stands as a testament to the organization's dedication to ensuring
              that every individual, regardless of their background, orientation,
              or gender identity, has the opportunity to thrive and flourish in
              their newfound home. Central to the program's success is RaricaNow's
              unyielding determination to provide essential support to Black Trans
              and LGBTIQ Newcomers and refugees as they navigate a complex system.
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Advocacy and Anti racism education</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              Our Advocacy and anti-racism programs are initiatives aimed at
              promoting equality and combating discrimination, particularly on the
              basis of race. These programs aim to raise awareness of the negative
              effects of racism, educate individuals and communities about the
              need to combat racism and promote policies and practices that
              promote diversity and inclusion.
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>inclusive Educational training program</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              The Inclusive Education Training Program focuses on creating
              inclusive spaces for the gender-diverse community, 2SLGBTIQ
              refugees, and newcomers. This program aims to provide participants
              with the knowledge and tools needed to cultivate environments that
              embrace diversity and promote inclusivity. Participants learn
              effective strategies to foster a welcoming and supportive atmosphere
              for individuals from gender-diverse backgrounds and marginalized
              communities. By enhancing awareness, understanding, and acceptance,
              this training program empowers participants to champion inclusivity
              and create brave-safe spaces for all.
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Mental health Support Program</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              Through our support program, we create a safe space for Improved
              mental health and well-being: Many newcomers and refugees experience
              feelings of isolation, anxiety, and depression as they adjust to a
              new culture and language. Support groups, follow-ups, and check-ins
              can provide a sense of community, connection, and belonging, which
              help to improve mental health and well-being. Our Support groups and
              follow-up programs at RaricaNow provide BlackLGBTIQ+ newcomers and
              refugees with valuable information and resources to help them
              navigate Canada's various systems and services.
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Basic needs and Food security Program</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              We provide 2SLGBTIQ+ Newcomers and Refugees with food, gloceries and
              bustickets to assist them in their intergration process
            </Webtext>
          </View>
        </View>

        <View style={styles.section}>
          <Title style={styles.title}>Counseling Program</Title>
          <View style={styles.card}>
            <Webtext style={styles.text}>
              We provide one on one counselling and through our extensive network,
              we offer valuable referrals and seamlessly connect individuals to
              essential healthcare services, including our newly partnership with
              the Rhodes Wellness College that providing probono counselling
              services for our community. Recognizing the challenges many of our
              members face without healthcare benefits, our program acts as a
              vital link, ensuring access to much-needed medical support.
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

export default WhatWeDoScreen;