package devs.team.net.service.dto;


import java.time.Instant;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the Medidor entity.
 */
public class MedidorDTO implements Serializable {

    private Long id;

    private String codigo;

    private Integer numeromedidor;

    private Instant fechaobtuvo;

    private Instant fecha;

    private Long usuarioId;

    private Long clasificacionId;

    private Long sectorId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Integer getNumeromedidor() {
        return numeromedidor;
    }

    public void setNumeromedidor(Integer numeromedidor) {
        this.numeromedidor = numeromedidor;
    }

    public Instant getFechaobtuvo() {
        return fechaobtuvo;
    }

    public void setFechaobtuvo(Instant fechaobtuvo) {
        this.fechaobtuvo = fechaobtuvo;
    }

    public Instant getFecha() {
        return fecha;
    }

    public void setFecha(Instant fecha) {
        this.fecha = fecha;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long getClasificacionId() {
        return clasificacionId;
    }

    public void setClasificacionId(Long clasificacionId) {
        this.clasificacionId = clasificacionId;
    }

    public Long getSectorId() {
        return sectorId;
    }

    public void setSectorId(Long sectorId) {
        this.sectorId = sectorId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        MedidorDTO medidorDTO = (MedidorDTO) o;
        if(medidorDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), medidorDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "MedidorDTO{" +
            "id=" + getId() +
            ", codigo='" + getCodigo() + "'" +
            ", numeromedidor=" + getNumeromedidor() +
            ", fechaobtuvo='" + getFechaobtuvo() + "'" +
            ", fecha='" + getFecha() + "'" +
            "}";
    }
}