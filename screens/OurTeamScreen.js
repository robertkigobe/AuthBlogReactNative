import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const teamMembers = [
  {
    id: 1,
    name: 'Adebayo Chris Katiiti',
    role: 'CEO & Founder',
    image: require('../assets/team/chris.png'),
    bio: 'Adebayo Chris Katiiti is a passionate human rights activist and a dedicated advocate for the transgender community. With over six years of experience, he has been actively involved in advocating for the rights of 2SLGBTIQ+ refugees, newcomers, and gender-diverse communities. Adebayo is the founder of RARICANow, an esteemed NGO based in Edmonton that provides support and assistance to 2SLGBTIQ+ refugees and newcomers. Having personally experienced the challenges of the refugee process, Adebayo has committed himself to helping fellow newcomers navigate this complex journey and access essential services. He has demonstrated exceptional leadership in social justice and inclusion, completing the Anti-Racism Capacity Building Course at MacEwan University and the Fundamentals of Leadership course at NAIT. Adebayo holds a Bachelor\'s degree in Sports Science from Makerere University in Uganda. Adebayo\'s unwavering dedication extends to eradicating all forms of oppression, particularly anti-Black racism, while advocating for mental health and social justice within gender-diverse communities. His journey to Edmonton, Canada began in August 2016 when he participated in the ILGA swimming competition, seeking refuge after the traumatic events of a police raid during a gay pride event in Uganda. As the reigning Mr. Gay Pride Uganda of 2015, he endured arrest, severe beatings, and public humiliation. Guided by the powerful words of Desmond Tutu, "Exclusion is never the way forward on our shared paths to freedom and justice," Adebayo serves as a board member (QTBIPOC Liaison) at ANSWERS Society. He is also a leader and organizer at Stonewall Canada, actively championing social justice. A talented storyteller and creator, Adebayo founded Katiiti Consulting Company to further his impact. Recognized for his remarkable contributions, Adebayo received the Change Maker Pride Award from EPFS in June 2018. He is a multi-talented artist, musician, and songwriter, using his music as a platform for inspiration and social justice. His recently released album, "SAMEBLOOD," draws from his lived experiences as a black transgender man in Canada. Adebayo has also produced a compelling documentary titled "UNPACKING BLACK TRANS LEGACY" with support from Telus Storyhive. In addition to his activism, Adebayo is a certified Life Coach and currently pursuing studies in Professional Counseling and Immigration and Citizenship Law. His ultimate belief is that true freedom can only be achieved when all individuals are liberated. NO ONE IS FREE UNTIL ALL OF US ARE FREE',
  },
  {
    id: 2,
    name: 'Gloria Anniva',
    role: 'Executive Director',
    image: require('../assets/team/gloria.png'),
    bio: 'Gloria holds a Bachelor of Development Studies degree from Makerere University. She is an experienced program manager with a track record of success in program development, implementation, and day-to-day management.She is deeply dedicated and committed to social justice, mental health, and community protection. A firm believer in the transformative power of good health, safety, and interdependence.',
  },
  {
    id: 3,
    name: 'Celena Campbell',
    role: 'Human Resources Manager',
    image: require('../assets/team/celena.png'),
    bio: 'Celena holds two degrees from the University of Alberta in Finance and Sociology. She is passionate about creating and maintaining a safe, inclusive, and diverse work culture within RARICANow! She loves playing board games with her friends and family in her spare time.',
  },
  {
    id: 4,
    name: 'Britanny Gabriella Prieto',
    role: 'Case Worker',
    image: require('../assets/team/gabi.jpeg'),
    bio: 'Gabriela is a Social Service Worker graduate and is currently pursuing a Bachelor’s degree in Social and Community development . Who is passionate about advocacy, empowerment, and mental health. She strives to create a respectful and safe environment for all of RaricaNow’s clients. ',
  }
];

export default function OurTeamScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Our Team</Text>
      <View style={styles.teamGrid}>
        {teamMembers.map(member => (
          <TouchableOpacity 
            key={member.id} 
            style={styles.memberCard}
            onPress={() => navigation.navigate('TeamMemberBio', { member })}
          >
            <Image source={member.image} style={styles.memberImage} />
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberRole}>{member.role}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#4a90e2',
  },
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  memberCard: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  memberImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
  },
});