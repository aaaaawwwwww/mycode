package himedia.project.workspace.service;

@Service
public class DocumentService {
	
	private final ProcessMapper mapper;
	
	public DocumentService(ProcessMapper mapper) {
		this.mapper = mapper;
	}
	
	public int returnDocument(Long docNo, String status, String returnComment) {
		return mapper.returnDocument(docNo, status, returnComment);
	}
}
