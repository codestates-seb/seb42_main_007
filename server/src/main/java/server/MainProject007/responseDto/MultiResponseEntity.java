package server.MainProject007.responseDto;

public class MultiResponseEntity<T, G> {
    private T data;
    private G pageInfo;

    public MultiResponseEntity(T data, G pageInfo) {
        this.data = data;
        this.pageInfo = pageInfo;
    }
}
