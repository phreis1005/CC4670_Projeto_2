import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Vibration, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
import firebase from './config/config'; 
import Modal from 'react-native-modal';

const AttendanceList = ({ navigation, route }) => {
  const { selectedSubject } = route.params; 
  const [presentStudents, setPresentStudents] = React.useState([]);
  const [isSending, setIsSending] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  const students = [
    { id: '1', name: 'Amanda Silva Martins' },
    { id: '2', name: 'Ana Clara Gentile Dantas' },
    { id: '3', name: 'Ana Júlia Barbosa de Oliveira' },
    { id: '4', name: 'Ana Paula Mendes Ferreira' },
    { id: '5', name: 'Arthur Henrique Botelho' },
    { id: '6', name: 'Beatriz de Araujo Balaton' },
    { id: '7', name: 'Beatriz Esthefany Correia Barbosa' },

  ];

  const toggleStudentAttendance = (studentId) => {
    const index = presentStudents.indexOf(studentId);
    if (index === -1) {
      setPresentStudents([...presentStudents, studentId]);
    } else {
      setPresentStudents(presentStudents.filter(id => id !== studentId));
    }
  };

  const handleSave = async () => {
    setIsSending(true);
    Vibration.vibrate();
    //alert("Salvo com sucesso!!!");
    try {
      const attendanceRef = firebase.database().ref('/attendance');
      await attendanceRef.push({
        presentStudents,
        subject: selectedSubject, 
        timestamp: Date.now(),
      });
      setTimeout(() => {
        setIsSending(false);
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
          navigation.navigate('Menu');
        }, 2000);
      }, 2000);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao registrar presença',
      });
    }
  };

  const renderStudents = () => {
    return students.map((student) => (
      <TouchableOpacity
        key={student.id}
        onPress={() => toggleStudentAttendance(student.id)}
        style={[
          styles.button,
          presentStudents.includes(student.id) ? styles.selectedButton : null,
        ]}
      >
        <View style={[styles.marker, presentStudents.includes(student.id) ? styles.selectedMarker : null]} />
        <Text style={styles.buttonText}>{student.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LISTA DE ALUNOS</Text>
        <Text style={styles.subjectText}>Disciplina: {selectedSubject}</Text> {}
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.studentsContainer}>
          {renderStudents()}
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Modal isVisible={isSending}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color="#375de3" />
        </View>
      </Modal>
      <Modal isVisible={isSent}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>PRESENÇA REGISTRADA</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 100,
    backgroundColor: '#375de3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subjectText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  studentsContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#483D8B',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: '100%',
  },
  selectedButton: {
    backgroundColor: '#6A5ACD',
  },
  marker: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFF',
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#483D8B',
  },
  selectedMarker: {
    backgroundColor: '#483D8B',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButtonContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#483D8B',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: '50%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
   modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AttendanceList;
