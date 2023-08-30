package zoeque.limitchecker.application.dto.record;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import java.time.LocalDateTime;
import zoeque.limitchecker.application.dto.IItemDetailDto;
import zoeque.limitchecker.domain.model.ItemTypeModel;

@JsonDeserialize
public record ItemDetailDto(String itemName,
                            ItemTypeModel itemTypeModel,
                            LocalDateTime expirationDate)
        implements IItemDetailDto {
  public String getItemName() {
    return this.itemName;
  }

  public ItemTypeModel getItemTypeModel() {
    return this.itemTypeModel;
  }

  public LocalDateTime getExpirationDate() {
    return this.expirationDate;
  }
}
