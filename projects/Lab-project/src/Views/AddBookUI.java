package Views;

import graphics.GUIimage;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JSeparator;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.JComboBox;

import Entities.GenreET;
import Entities.SubjectET;

public class AddBookUI extends JPanel {
	

	public JButton btnBack;
	public JButton btnAddBook;
	private JTextField txtTitle;
	private JTextField txtAuthor;
	private JTextField txtLan;
	private JTextField txtContent;
	private JTextArea txtASummary;
	private JTextField txtKwords;
	private JTextField txtPhoto;
	private JComboBox comboBoxGenres;
	private JComboBox comboBoxSubject;
	private ArrayList<GenreET> GenresET;
	private JTextField txtPrice;
	
	public JTextField getTxtPrice() {
		return txtPrice;
	}
	public void setTxtPrice(JTextField txtPrice) {
		this.txtPrice = txtPrice;
	}
	public JTextField getTxtTitle() {
		return txtTitle;
	}
	public JTextField getTxtAuthor() {
		return txtAuthor;
	}
	public JTextField getTxtLan() {
		return txtLan;
	}
	public JTextField getTxtContent() {
		return txtContent;
	}
	public JTextArea getTxtASummary() {
		return txtASummary;
	}
	public JTextField getTxtKwords() {
		return txtKwords;
	}
	public JTextField getTxtPhoto() {
		return txtPhoto;
	}
	public JComboBox getComboBoxGenres() {
		return comboBoxGenres;
	}
	public JComboBox getComboBoxSubject() {
		return comboBoxSubject;
	}
	public ArrayList<GenreET> getGenresET() {
		return GenresET;
	}
	public void setTxtTitle(JTextField txtTitle) {
		this.txtTitle = txtTitle;
	}
	public void setTxtAuthor(JTextField txtAuthor) {
		this.txtAuthor = txtAuthor;
	}
	public void setTxtLan(JTextField txtLan) {
		this.txtLan = txtLan;
	}
	public void setTxtContent(JTextField txtContent) {
		this.txtContent = txtContent;
	}
	public void setTxtASummary(JTextArea txtASummary) {
		this.txtASummary = txtASummary;
	}
	public void setTxtKwords(JTextField txtKwords) {
		this.txtKwords = txtKwords;
	}
	public void setTxtPhoto(JTextField txtPhoto) {
		this.txtPhoto = txtPhoto;
	}
	public void setComboBoxGenres(JComboBox comboBoxGenres) {
		this.comboBoxGenres = comboBoxGenres;
	}
	public void setComboBoxSubject(JComboBox comboBoxSubject) {
		this.comboBoxSubject = comboBoxSubject;
	}
	public void setGenresET(ArrayList<GenreET> genresET) {
		GenresET = genresET;
	}
	public AddBookUI(ArrayList<GenreET> genresET)
	{
		GenresET=genresET;
		setBackground(new Color(153, 204, 204));
		this.setBounds(0, 0, 677, 562);
		this.setLayout(null);
		
		JSeparator separator = new JSeparator();
		separator.setBounds(0, 126, 677, 12);
		add(separator);
		
		btnBack = new JButton("Back");
		btnBack.setBounds(40, 466, 89, 30);
		add(btnBack);
		
		txtTitle = new JTextField();
		txtTitle.setBounds(114, 221, 155, 25);
		add(txtTitle);
		txtTitle.setColumns(10);
		
		txtAuthor = new JTextField();
		txtAuthor.setColumns(10);
		txtAuthor.setBounds(114, 250, 155, 25);
		add(txtAuthor);
		
		txtLan = new JTextField();
		txtLan.setColumns(10);
		txtLan.setBounds(114, 279, 155, 25);
		add(txtLan);
		
		JPanel panel = new JPanel();
		panel.setBounds(340, 221, 290, 100);
		add(panel);
		panel.setLayout(null);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(0, 0, 290, 100);
		panel.add(scrollPane);
		
		txtASummary = new JTextArea();
		txtASummary.setLineWrap(true);
		txtASummary.setBounds(0, 0, 290, 100);
		scrollPane.setViewportView(txtASummary);
		
		txtContent = new JTextField();
		txtContent.setColumns(10);
		txtContent.setBounds(114, 308, 155, 25);
		add(txtContent);
		
		JLabel lblContent = new JLabel("Content :");
		lblContent.setFont(new Font("Tahoma", Font.PLAIN, 12));
		lblContent.setBounds(40, 312, 70, 14);
		add(lblContent);
		
		JLabel label = new JLabel("Title :");
		label.setFont(new Font("Tahoma", Font.PLAIN, 12));
		label.setBounds(40, 225, 50, 14);
		add(label);
		
		JLabel label_1 = new JLabel("Author :");
		label_1.setFont(new Font("Tahoma", Font.PLAIN, 12));
		label_1.setBounds(40, 254, 60, 14);
		add(label_1);
		
		JLabel label_2 = new JLabel("Language :");
		label_2.setFont(new Font("Tahoma", Font.PLAIN, 12));
		label_2.setBounds(40, 283, 70, 14);
		add(label_2);
		
		JLabel lblSummary = new JLabel("Summary :");
		lblSummary.setFont(new Font("Tahoma", Font.PLAIN, 12));
		lblSummary.setBounds(278, 225, 70, 14);
		add(lblSummary);
		
		btnAddBook = new JButton("Add");
		btnAddBook.setBounds(514, 458, 89, 30);
		add(btnAddBook);
		
		
		JLabel lblKeyWords = new JLabel("Key words :");
		lblKeyWords.setFont(new Font("Tahoma", Font.PLAIN, 12));
		lblKeyWords.setBounds(40, 341, 70, 14);
		add(lblKeyWords);
		
		txtKwords = new JTextField();
		txtKwords.setColumns(10);
		txtKwords.setBounds(114, 337, 155, 25);
		add(txtKwords);
		
		comboBoxGenres = new JComboBox();
		comboBoxGenres.setBounds(114, 366, 155, 25);
		add(comboBoxGenres);
		BringGenreTCB();
		comboBoxGenres.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				SetSubjects((String)comboBoxGenres.getSelectedItem());
			}
		});
		
		comboBoxSubject = new JComboBox();
		comboBoxSubject.setBounds(114, 397, 155, 25);
		add(comboBoxSubject);
		comboBoxSubject.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				
			}
		});
		
		JLabel lblGenre = new JLabel("Genre :");
		lblGenre.setFont(new Font("Tahoma", Font.PLAIN, 12));
		lblGenre.setBounds(40, 370, 70, 14);
		add(lblGenre);
		
		JLabel lblSubject = new JLabel("Subject :");
		lblSubject.setFont(new Font("Tahoma", Font.PLAIN, 12));
		lblSubject.setBounds(40, 399, 70, 14);
		add(lblSubject);
		
		JLabel lblAddUserTo = new JLabel("Add Book To DB");
		lblAddUserTo.setFont(new Font("Lucida Grande", Font.BOLD, 22));
		lblAddUserTo.setBounds(248, 150, 250, 50);
		add(lblAddUserTo);
		
		txtPrice = new JTextField();
		txtPrice.setColumns(10);
		txtPrice.setBounds(114, 430, 155, 25);
		add(txtPrice);
		
		JLabel lblPrice = new JLabel("Price:");
		lblPrice.setFont(new Font("Tahoma", Font.PLAIN, 12));
		lblPrice.setBounds(40, 434, 70, 14);
		add(lblPrice);
		
		
		
		JLabel lblBackground = new JLabel("New label");
		lblBackground.setBounds(0, 0, 671, 533);
		lblBackground.setIcon(new GUIimage("Background",lblBackground.getWidth(),lblBackground.getHeight()).image);
		add(lblBackground);
	}
	public void BringGenreTCB()
	{
		for(int i=0;i<GenresET.size();i++)
		comboBoxGenres.addItem(GenresET.get(i).getGenreTitle());
	}
	public void SetSubjects(String Title)
	{
		comboBoxSubject.removeAllItems();;
		GenreET g=new GenreET();
		for(int i=0;i<GenresET.size();i++)
		{
			if(Title.equals(GenresET.get(i).getGenreTitle())){
					g.setGid(GenresET.get(i).getGid());
					g.setGenreTitle(Title);
					g.setSubjectList(GenresET.get(i).getSubjectList());
			}
		}
		for(int i=0;i<g.getSubjectList().size();i++)
		{
			comboBoxSubject.addItem(g.getSubjectList().get(i).getSubjectTitle());
		}
	}
	public void clearFields()
	{
		txtTitle.setText("");
		txtAuthor.setText("");
		txtContent.setText("");
		txtLan.setText("");
		txtASummary.setText("");
		txtKwords.setText("");
	}
}
