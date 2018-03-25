package devs.team.net.service.mapper;

import devs.team.net.domain.*;
import devs.team.net.service.dto.EscalasDelMedidorDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity EscalasDelMedidor and its DTO EscalasDelMedidorDTO.
 */
@Mapper(componentModel = "spring", uses = {ClasificacionMapper.class})
public interface EscalasDelMedidorMapper extends EntityMapper<EscalasDelMedidorDTO, EscalasDelMedidor> {

    @Mapping(source = "escalasDelMedidors.id", target = "escalasDelMedidorsId")
    EscalasDelMedidorDTO toDto(EscalasDelMedidor escalasDelMedidor);

    @Mapping(source = "escalasDelMedidorsId", target = "escalasDelMedidors")
    EscalasDelMedidor toEntity(EscalasDelMedidorDTO escalasDelMedidorDTO);

    default EscalasDelMedidor fromId(Long id) {
        if (id == null) {
            return null;
        }
        EscalasDelMedidor escalasDelMedidor = new EscalasDelMedidor();
        escalasDelMedidor.setId(id);
        return escalasDelMedidor;
    }
}
